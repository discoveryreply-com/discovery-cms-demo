function docReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(fn, 500);
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }

    document.addEventListener('create-discovery-component', fn);
}

/**
 * Makes a post message to enable preview mode in a NextJS application.
 * Requires the data-preview-enabled param to be set when adding the script to the html.
 */
function enablePreviewModeIfNeeded() {
    const previewEnabled = document.getElementById('connectorScript')
        .getAttribute('data-preview-enabled');

    // Every framework except NextJS
    if (previewEnabled == null) {
        return;
    }

    if (previewEnabled === 'true') {
        console.log('Using Preview Mode')
    } else {
        parent.postMessage({ enablePreview: true }, '*');
    }
}

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let preview = params.preview;

if (preview === 'editor') {
    docReady(function () {
        enablePreviewModeIfNeeded();

        setTimeout(() => {
            const discoveryComponents = document.querySelectorAll('[data-discovery-id]');

            discoveryComponents.forEach((component) => {
                const componentId = component.dataset.discoveryId ?? null;
                component.onmouseenter = function (e) {
                    e.target.style.border = '3px solid #3da4ff';
                };
                component.onmouseleave = function (e) {
                    e.target.style.border = 'none';
                };
                component.onclick = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    parent.postMessage({ id: componentId }, '*');
                };
            });
        }, 500);
    });
}
