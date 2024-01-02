import { tree } from "next/dist/build/templates/app-page";

function rehypeYoutube() {
  return visit(tree, 'element', (node) => {
    // Check if node is defined before checking its properties
    if (node &&
      node.tagName === 'a' &&
      node.properties &&
      node.properties.href &&
      'children' in node && // Ensuring node is defined before checking for 'children'
      Array.isArray(node.children)
    ) {
      const url = node.properties.href;
      const match = url.match(/https:\/\/www\.youtube\.com\/watch\?v=([^&]+)/);

      if (match) {
        const videoId = match[1];
        const iframeNode = {
          type: 'element',
          tagName: 'iframe',
          properties: {
            width: 560,
            height: 315,
            src: `https://www.youtube.com/embed/${videoId}`,
            frameborder: '0',
            allowfullscreen: true,
          },
          children: [
            {
              type: 'element',
              tagName: 'span',
              properties: { className: 'play-button' },
              children: [{ type: 'text', value: '▶ Play' }],
            },
          ],
        };

        // Replace the existing node with the new iframe node
        node.tagName = 'span';
        node.properties = {};
        node.children = [iframeNode];
      }
    }
  });
}

export default rehypeYoutube;

function visit(_tree, _arg1, _arg2) {
  throw new Error("Function not implemented.");
}
