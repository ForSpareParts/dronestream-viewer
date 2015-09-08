/**
 * Call callback with arguments key, value for each key-value pair in obj, then
 * return an array of the results.
 */
export function kvMap(obj, callback) {
  var output = [];

  for (var key in obj) {
    output.push(callback(key, obj[key]));
  }

  return output;
}


/**
 * Builds data argument for creating a chartjs line chart given labels and a
 * single ordered dataset (both as arrays).
 */
export function buildChartData(labels, data) {
  return {
    labels: labels,
    datasets: [
      {
        label: "Drone strikes by year",
        fillColor: "rgba(112, 112, 112, 0.56)",
        strokeColor: "rgb(35, 35, 35)",
        pointColor: "#000",
        pointStrokeColor: "#fff",
        pointHighlightFill: "rgb(214, 0, 0)",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
      }
    ]
  };
}
