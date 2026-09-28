import { useState, useEffect, useMemo } from 'react';
import { fetchGitHubRepositories } from '../services/github';

export function useGitHubProjects(username) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      setLoading(true);
      setError(null);
      const res = await fetchGitHubRepositories(username);
      if (!isMounted) return;

      if (res.success) {
        setProjects(res.data);
      } else {
        setError(res.error || 'Failed to fetch repositories');
      }
      setLoading(false);
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, [username]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;

    return projects.filter((project) => {
      const lang = (project.language || '').toLowerCase();
      const name = (project.name || '').toLowerCase();
      const desc = (project.description || '').toLowerCase();
      const topics = (project.topics || []).map((t) => t.toLowerCase());
      const combinedText = `${lang} ${name} ${desc} ${topics.join(' ')}`;

      if (activeFilter === 'AI / ML') {
        return (
          topics.some((t) =>
            ['ai', 'ml', 'nlp', 'llm', 'machine-learning', 'deep-learning', 'dataset', 'agent', 'model', 'neural', 'openai', 'gemini'].includes(t)
          ) ||
          name.includes('ai') ||
          name.includes('agent') ||
          name.includes('model') ||
          name.includes('intelligence') ||
          desc.includes('ai ') ||
          desc.includes('artificial intelligence') ||
          desc.includes('machine learning') ||
          desc.includes('llm') ||
          desc.includes('nlp') ||
          desc.includes('agent')
        );
      }

      if (activeFilter === 'Full Stack') {
        return (
          topics.some((t) =>
            ['fullstack', 'full-stack', 'mern', 'mean', 'crud', 'backend', 'api', 'mongodb', 'express', 'django'].includes(t)
          ) ||
          name.includes('fullstack') ||
          name.includes('full-stack') ||
          name.includes('app') ||
          name.includes('platform') ||
          desc.includes('full-stack') ||
          desc.includes('full stack') ||
          desc.includes('backend') ||
          desc.includes('database') ||
          desc.includes('api')
        );
      }

      if (activeFilter === 'Frontend') {
        return (
          lang === 'javascript' ||
          lang === 'typescript' ||
          lang === 'html' ||
          lang === 'css' ||
          topics.some((t) =>
            ['react', 'frontend', 'front-end', 'ui', 'css', 'html', 'tailwind', 'vue', 'web', 'responsive'].includes(t)
          ) ||
          name.includes('frontend') ||
          name.includes('ui') ||
          name.includes('portfolio') ||
          name.includes('web') ||
          desc.includes('frontend') ||
          desc.includes('ui') ||
          desc.includes('interface') ||
          desc.includes('react')
        );
      }

      if (activeFilter === 'Python') {
        return (
          lang === 'python' ||
          topics.some((t) => ['python', 'fastapi', 'flask', 'django', 'numpy', 'pandas'].includes(t)) ||
          name.includes('python') ||
          combinedText.includes('python') ||
          combinedText.includes('fastapi')
        );
      }

      if (activeFilter === 'JavaScript') {
        return (
          lang === 'javascript' ||
          lang === 'typescript' ||
          topics.some((t) => ['javascript', 'typescript', 'js', 'ts', 'node', 'nodejs', 'react'].includes(t)) ||
          name.includes('js') ||
          name.includes('react') ||
          combinedText.includes('javascript') ||
          combinedText.includes('typescript') ||
          combinedText.includes('node')
        );
      }

      return true;
    });
  }, [projects, activeFilter]);

  return {
    projects,
    filteredProjects,
    loading,
    error,
    activeFilter,
    setActiveFilter
  };
}
