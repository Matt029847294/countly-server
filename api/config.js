var countlyConfig = {};

// Set your host IP or domain to be used in the emails sent
// countlyConfig.host = "YOUR_IP_OR_DOMAIN";

countlyConfig.mongodb = {};
countlyConfig.api = {
    port: 3001,                     // Port for API service
    events: {
        log: true,                 // Log all incoming events, see below
        whitelist: []
    }
};
countlyConfig.mongodb.host = "localhost";
countlyConfig.mongodb.db = "countly";
countlyConfig.mongodb.port = 27017;

module.exports = countlyConfig;

/* Event logging
 * If you plan to use Countly for more than app analytics you might need all events to be stored for future use.
 * Set countlyConfig.api.events to {log: true} to log all coming events in event_log* collections.
 * To whitelist logged events fill countlyConfig.events.whitelist array with keys of all events that need to be logged.
 * Do not set whitelist to have all events stored.
 *
 * Note that besides standard parameters of event (key, count, sum, segmentation) 'id' parameter is also stored
 * as a collection primary key (_id in mongo).
 * Specify your ID of event (if any) in this parameter for later use. If no ID provided, Countly will generate it.
 *
 * Note that there is no corresponding /o method for event log. It's assumed that to read events you should use
 * direct database connection instead.
 */

//countlyConfig.api.events = {log: true, whitelist: ['event1', 'event2', 'event3']};