try {
    var fieldInstructions = content.get("Instructions");
    var fieldFieldCode = content.get("Field Code");
    var fieldNoResultsMessage = content.get("No Results Message");
    var message = "";
    var fieldZone = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Zone' output='normal' display_field='value' />");

    if (fieldNoResultsMessage.isNull()) {
        message = "<p>We're sorry, there are no results for the search parameters.</p>";
    } else {
        message = fieldNoResultsMessage;
    }

    if (fieldZone == 'ZoneA') {

        document.write('<div id="filterFieldWrapper" class="contentItem" data-posistion-default="ZoneA" data-position-selected="ZoneA" >\n  <div id="filterField" class="standardContent">');
        document.write('<div class="filterFieldInstructions">' + fieldInstructions + '</div>\n');
        document.write('<div>\n ' + fieldFieldCode + '<div class="clearfix"></div></div>\n</div>\n');
        document.write('<div class="noResultsToShow standardContent hideResultsMessage">' + message + '</div>\n');
        document.write('</div>');

    } else if (fieldZone == 'ZoneB') {

        document.write('<div id="filterFieldWrapper" class="contentItem" data-posistion-default="ZoneB" data-position-selected="ZoneB" >\n  <div id="filterField" class="standardContent">');
        document.write('<div class="filterFieldInstructions">' + fieldInstructions + '</div>\n');
        document.write('<div>\n ' + fieldFieldCode + '<div class="clearfix"></div></div>\n</div>\n');
        document.write('<div class="noResultsToShow standardContent hideResultsMessage">' + message + '</div>\n');
        document.write('</div>');

    }


} catch (err) {
    document.write(err.message);
}
