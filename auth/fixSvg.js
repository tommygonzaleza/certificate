export function fixSvgUrls() {
    function fixForAttribute(attrib) {
        const baseUrl = window.location.href;

        /**
         * Find all svg elements with the given attribute, e.g. for `mask`.
         * See: http://stackoverflow.com/a/23047888/796152
         */
        [].slice.call(document.querySelectorAll(`svg [${attrib}]`))
            // filter out all elements whose attribute doesn't start with `url(#`
            .filter((element) => element.getAttribute(attrib).indexOf('url(#') === 0)
            // prepend `window.location` to the attrib's url() value, in order to make it an absolute IRI
            .forEach((element) => {
                const maskId = element.getAttribute(attrib).replace('url(', '').replace(')', '');
                element.setAttribute(attrib, `url(${baseUrl + maskId})`);
            });
    }

    // this fixes the URL IDs for 'fill' and 'mask'; if you need others, add them here
    fixForAttribute('fill');
    fixForAttribute('mask');
}