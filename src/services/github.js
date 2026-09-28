/**
 * GitHub API service for Syed Aman's portfolio
 * Dynamically synchronizes open-source repositories from @SyedAman1907 with deduplication and caching.
 */

const CACHE_KEY = 'syed_aman_github_repos_cache_v3';
const CACHE_TTL_MS = 1000 * 60 * 15; // 15 minutes cache to respect GitHub rate limits

export async function fetchGitHubRepositories(usernameOverride) {
  const username = usernameOverride || 'SyedAman1907';

  // Check sessionStorage cache first
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TTL_MS && Array.isArray(data) && data.length > 0) {
        return { success: true, data, fromCache: true, username };
      }
    }
  } catch (err) {
    console.warn('Could not read GitHub cache:', err);
  }

  const endpoint = `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`;

  try {
    const res = await fetch(endpoint, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    });

    if (!res.ok) {
      throw new Error(`GitHub API HTTP ${res.status}`);
    }

    const repos = await res.json();
    if (!Array.isArray(repos)) {
      throw new Error('Unexpected GitHub API response');
    }

    // Deduplication keys for the 3 featured projects
    const featuredFingerprints = [
      'resumeanalyzer',
      'resumeanalyzeragent',
      'househunt',
      'ainewsintelligence',
      'newsintelligence'
    ];

    // Filter out:
    // 1. Forks
    // 2. Profile README repository (name matches username)
    // 3. Dotfiles / hidden repos
    // 4. Repositories already showcased as Featured Projects
    const filtered = repos.filter((repo) => {
      if (repo.fork) return false;

      const name = repo.name.toLowerCase();
      if (name === username.toLowerCase()) return false;
      if (name.startsWith('.') || name === 'config' || name === 'test' || name === 'my-profile') return false;

      const normalized = name.replace(/[^a-z0-9]/g, '');
      if (featuredFingerprints.some((fp) => normalized.includes(fp))) {
        return false;
      }

      return true;
    });

    // Map into clean repository structure
    const processed = filtered.map((repo) => {
      const language = repo.language || 'Code';
      const topics = Array.isArray(repo.topics) ? repo.topics : [];
      const description = repo.description || 'Open-source software project built with clean modular architecture.';

      return {
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description,
        language,
        topics,
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        htmlUrl: repo.html_url,
        updatedAt: repo.updated_at,
        isArchived: repo.archived
      };
    });

    // Save into cache
    try {
      sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), data: processed })
      );
    } catch (err) {
      console.warn('Could not cache GitHub response:', err);
    }

    return { success: true, data: processed, fromCache: false, username };
  } catch (error) {
    console.error('Failed to fetch GitHub projects:', error);
    return { success: false, error: error.message, data: [], username };
  }
}
