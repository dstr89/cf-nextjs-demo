import { ContentfulLivePreview } from '@contentful/live-preview';

ContentfulLivePreview.init({
  locale: 'en-US',
  debugMode: true,
  enableLiveUpdates: true,
  space: '71ayinbFLRWWUEmPZ7RLI1'
});

ContentfulLivePreview.subscribe('save', {
  callback: async () => {
    const pathname = window.location.pathname;
    await fetch(`/api/revalidate?pathname=${pathname}`);
    window.location.reload();
  },
});