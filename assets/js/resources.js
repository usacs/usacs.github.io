/*
 * Resource List for RU students.
 */

const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d\
/1YVK9AwOS5iB64B5vLv-bInPz6F-mf4ad1M3oOE_b1bI/edit#gid=1783909318";

// TODO: should just get some SVG's for this stuff
const PLUS_SIGN_ENCODED = '%2B';
const MINUS_SIGN_ENCODED = '%E2%88%92';
const DOT_HTML_ENTITY = '&#183;';

/*
 * Resolves with a 'DataTable' for a given Google Sheet
 * or rejects with a string detailing the error
 */
function getGoogleSheet(spreadsheetUrl) {
    return new Promise((resolve, reject) => {
        const query = new google.visualization.Query(spreadsheetUrl);
        query.setQuery("SELECT *");

        query.send((resp) => {
            if (resp.isError()) {
                reject(resp.getDetailedMessage());
            } else {
                resolve(resp.getDataTable());
            }
        });
    });
}

/*
 * Given a Google Sheet 'DataTable' builds the resource list
 * and returns a string to be inserted in the page
 */
function buildResourceListHTMLString(spreadsheet) {
    // returns [1, 2, 3, ..., n]
    const range = (n) => { 
        arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = i;
        }

        return arr;
    };

    // template for a resource
    const resourceTemplate = (resource) => {
        return `
            <li class="resource list-group-item" style="display: none;">
                ${DOT_HTML_ENTITY}
                <a href="${resource.link}" target="_blank">
                    ${resource.name}
                </a>
                <span class="resource-description">
                    - ${resource.description}
                </span>
            </li>`;
    };

    // template for entire resource list
    const resourceListTemplate = (categoryMap) => {
        return Object.entries(categoryMap)
            .map(([category, resources]) => {
                return `
                        <div class="category">
                            <li class="category-name list-group-item">
                                <span class="category-name-icon">
                                    ${decodeURIComponent(PLUS_SIGN_ENCODED)}
                                </span>
                                ${category} 
                            </li>
                            ${resources.map(resourceTemplate).join('\n')}
                        </div>`;
            })
            .join('\n');
    };

    // A map from 'categoryName: String' to 'resources: List<ResourceObjects>.
    // A resource object is defined in the first call to map().
    const categoryMap = range(spreadsheet.getNumberOfRows())
        // for each row index in spreadsheet, make a resource object
        .map((rowIdx) => {
            return {
                name: spreadsheet.getValue(rowIdx, 1),
                description: spreadsheet.getValue(rowIdx, 2),
                link: spreadsheet.getValue(rowIdx, 3),
                category: spreadsheet.getValue(rowIdx, 4),
                approved: parseInt(spreadsheet.getValue(rowIdx, 5), 10),
            };
        })
        // filter out resources that have not been approved yet
        .filter(({approved}) => approved === 1)
        // group resources by one of their keys, in this case
        // the 'category' key. reduces to a map where the keys
        // are the 'category' keys and the values are lists
        // of resources grouped by 'category'.
        .reduce((categoryMap, resource) => {
            if (!categoryMap.hasOwnProperty(resource.category)) {
                categoryMap[resource.category] = [resource];
            } else {
                categoryMap[resource.category].push(resource);
            }

            return categoryMap;
        }, {});

    const resourceListHTMLString = resourceListTemplate(categoryMap);

    return resourceListHTMLString;
}

/*
 * Inject resource list into document
 */
function injectResourceList(resourceListHTMLString) {
    return $("#resource-list").html(resourceListHTMLString);
}

/*
 * Define interactivity for resource list e.g. onClick()
 */
function setResourceListInteractions(element) {
    const categoryNames = $(`#${element.attr('id')} .category-name`);

    categoryNames.on('click', (e) => {
        const categoryName = $(e.currentTarget);
        const resources = categoryName.parent().children('.resource');

        // toggle list
        resources.slideToggle(200);

        // toggle expand/collapse icon
        const icon = categoryName.children('.category-name-icon');
        const iconEncoded = encodeURIComponent(icon.html().trim());
        icon.html(decodeURIComponent((iconEncoded === PLUS_SIGN_ENCODED) ?
            MINUS_SIGN_ENCODED : PLUS_SIGN_ENCODED));
    });
}

/*
 * Init resource list
 */
$(document).ready(() => {
    getGoogleSheet(SPREADSHEET_URL)
        .then(buildResourceListHTMLString)
        .then(injectResourceList)
        .then(setResourceListInteractions)
        .catch(console.log);
});

