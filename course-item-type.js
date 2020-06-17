/***
*     @author Victor Chimenti, MSCS 2020
*     @file course-item-type.js
*
*     This new content type is being created for the University Registrar
*     to host entries that are mapped from a Terminal 4 form which will be
*     filled out by professors to describe their course.
* 
*     The content type generated from the mapping of this form will be used
*     as a sortable, searchable content item managed by the organizer.js
*     and displayed on any primary page layout in the University
*     (Homepage, Landing Page, Standard Subpage).
* 
*     The intention is to create a single content type that can be mapped
*     to from any of the 32 departments in the university. This allows the
*     item to be displayed on individual department pages or on the
*     Registrar's master course list.
*
*     Document will write once when the page loads
*
*     @version 2.0
*/



try {
    /* -- Initialize function scope variables -- */
    var contentName = content.get("Name");
    var commonName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Name' output='normal' display_field='value' />");
    var coursePrefix = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Prefix' output='normal' display_field='value' />");
    var courseSection = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Section' output='normal' display_field='value' />");
    var courseNumber = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Number' output='normal' display_field='value' />");
    var term = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Term' output='normal' display_field='value' />");
    var year = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Year' output='normal' display_field='value' />");
    var faculty = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Faculty' output='normal' display_field='value' />");
    var courseDescription = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Description' output='normal' display_field='value' />");
    var courseType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Type' output='normal' display_field='value' />");
    var syllabus = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Syllabus' output='normal' display_field='value' />");
    var textbooks = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Textbooks' output='normal' display_field='value' />");
    var assignments = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Assignments' output='normal' display_field='value' />");
    var prerequisites = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Prerequisites' output='normal' display_field='value' />");
    var groupDescription = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Type Description' output='normal' display_field='value' />");
    var comments = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Comments' output='normal' display_field='value' />");
    var keyWords = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Keywords' output='normal' display_field='value' />");



    /* -- Derive the Course Title -- */
    var courseTitle = coursePrefix + ' ' + courseNumber + '-' + courseSection + ' ' + commonName;



    /* -- Wrap the content fields -- */
    var beginningHTML = '<div class="contentItem accordion courseItemWrapper" id="id<t4 type=\'meta\' meta=\'content_id\' />"><div class="accordion-group courseItem standardContent"><t4 type=\'meta\' meta=\'html_anchor\' />';
    var endingHTML = '</div></div>';



    /*  -- Parse out Runtime Generated Content IDs -- */
    var cardHeader = '<div class="card-header" id="heading<t4 type=\'meta\' meta=\'content_id\' />">';
    var buttonLink = '<button class="btn btn-link" type="button" id="button<t4 type=\'meta\' meta=\'content_id\' />" data-toggle="collapse" data-target="#collapse<t4 type=\'meta\' meta=\'content_id\' />" aria-expanded="false" aria-controls="collapse<t4 type=\'meta\' meta=\'content_id\' />">';
    var collapseDiv = '<div class="collapse" id="collapse<t4 type=\'meta\' meta=\'content_id\' />">';



    /* -- Write the card header -- */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write('<div class="card">'); // closed individually in *** write closing tags *** found near bottom of file currently line 142
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, cardHeader));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, buttonLink));
    document.write('<span class="courseTitleWrapper"><i class="fas fa-minus"></i><i class="fas fa-plus"></i><span class="courseTitle">' + courseTitle + '</span></span></button>');  // close buttonLink tag here



    /* -- Write the open viewable summary header -- */
    document.write('<div class="col-xs-12 courseSummaryWrapper">');
    document.write('<div class="row col-xs-12 courseSummaryHeader">');
    if (courseType != "") {
        document.write('<div class="col-xs-12 courseDetails commonTypes"><h4>Course Type: </h4><span class="courseType">' + courseType + '</span></div>');
    } else {
        document.write('<div class="col-xs-12 courseDetails commonTypes" style="display: none"><h4>Course Type: </h4><span class="courseType">No Course Type Entered</span></div>');
    }
    document.write('<div class="col-xs-12 courseDetails commonName"><h4>Common Name: </h4><span class="commonName">' + commonName + '</span></div>');
    document.write('<div class="col-xs-12 col-sm-4 courseDetails coursePrefix"><h5>Prefix: </h5><span class="coursePrefix">' + coursePrefix + '</span></div>');
    document.write('<div class="col-xs-12 col-sm-4 courseDetails courseNumber"><h5>Number: </h5><span class="courseNumber">' + courseNumber + '</span></div>');
    document.write('<div class="col-xs-12 col-sm-4 courseDetails courseSection"><h5>Section: </h5><span class="courseSection">' + courseSection + '</span></div></div>'); // Closes courseSummaryHeader row div  
    document.write('<div class="row col-xs-12 courseSummaryHeader2">');
    document.write('<div class="col-xs-12 col-sm-4 courseDetails instructors"><h5>Faculty: </h5><span class="faculty">' + faculty + '</span></div>');
    document.write('<div class="col-xs-12 col-sm-4 courseDetails terms"><h5>Term: </h5><span class="term">' + term + '</span></div>');
    document.write('<div class="col-xs-12 col-sm-4 courseDetails years"><h5>Year: </h5><span class="year">' + year + '</span></div></div>'); // Closes courseSummaryHeader2 row div
    document.write('</div></div>'); // close courseSummaryWrapper, and card header divs



    /**** * -- Write the collapsible body -- **** */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, collapseDiv));  // closed in *** write closing tags ***



    /* -- Write Program Cards--*/
    document.write('<div class="card-body">');
    document.write('<div class="container-fluid">');



    /* -- Write the collapsed summary header -- */
    document.write('<div class="row col-xs-12 fullCourseDescriptionWrapper">');
    document.write('<div class="col-xs-12 courseDetails courseDescriptions"><h5>Course Description: </h5><div class="courseInfo">' + courseDescription + '</div></div></div>'); // close fullCourseDescriptionWrapper div



    /* -- Write Program Level 1 Details --*/
    if (syllabus != "") {
        document.write('<div class="row col-xs-12 levelOne">');
        document.write('<div class="col-xs-12 courseDetails syllabus"><h5>Syllabus: </h5><div class="courseInfo">' + syllabus + '</div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelOne courseDetails syllabus" style="display: none"><h5>No Syllabus Provided</h5></div>');
    }



    /* -- Write Program Level 2 Details --*/
    if (assignments != "") {
        document.write('<div class="row col-xs-12 levelTwo">');
        document.write('<div class="col-xs-12 courseDetails assignments"><h5>Assignments: </h5><div class="courseInfo">' + assignments + '</div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelTwo courseDetails assignments" style="display: none"><h5>No Assignments Provided</h5></div>');
    }



    /* -- Write Program Level 3 Details --*/
    if (textbooks != "") {
        document.write('<div class="row col-xs-12 levelThree">');
        document.write('<div class="col-xs-12 courseDetails textbooks"><h5>Textbooks: </h5><div class="courseInfo">' + textbooks + '</div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelThree courseDetails textbooks" style="display: none"><h5>No Textbooks Provided</h5></div>');
    }



    /* -- Write Program Level 4 Details --*/
    // prerequisites
    if (prerequisites != "") {
        document.write('<div class="row col-xs-12 levelFour">');
        document.write('<div class="col-xs-12 courseDetails prerequisites"><h5>Prerequisites: </h5><div class="courseInfo">' + prerequisites + '</div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelFour courseDetails prerequisites" style="display: none"><h5>No Prerequisites Provided</h5></div>');
    }



    /* -- Write Program Level 5 Details --*/
    // Comments are a plain text entry field so they need to be wrapped in a paragraph and a span to match level four and up
    if (comments != "") {
        document.write('<div class="row col-xs-12 levelFive">');
        document.write('<div class="col-xs-12 courseDetails comments"><h5>Comments: </h5><div class="courseInfo"><p><span>' + comments + '</span></p></div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelFive courseDetails comments" style="display: none"><h5>No Comments Provided</h5></div>');
    }



    /* -- Write Program Level 6 Details --*/
    // group description is a plain text entry field so they need to be wrapped in a paragraph and a span to match level four and up
    if (groupDescription != "") {
        document.write('<div class="row col-xs-12 levelSix">');
        document.write('<div class="col-xs-12 courseDetails groupDescription"><h5>Common Group Description: </h5><div class="courseInfo"><p><span>' + groupDescription + '</span></p></div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelSix courseDetails groupDescription" style="display: none"><h5>No Common Group Description Provided</h5></div>');
    }



    /* -- Write Program Level 7 Details --*/
    if (keyWords != "") {
        /* -- Keywords is a hidden field that is used to add searchable keywords when creating a program item but is not displayed on the live page -- */
        document.write('<div class="row col-xs-12 levelSeven">');
        document.write('<div class="col-xs-12 courseDetails keyWords" style="display: none"><h5>Keywords: </h5><div class="courseInfo">' + keyWords + '</div></div>');
        document.write('</div>');
    } else {
        document.write('<div class="row levelSeven courseDetails keyWords" style="display: none"><h5>No Keywords Provided</h5></div>');
    }



    /* -- Write Closing Tags -- */
    document.write('</div></div></div>');  // close the card-body and container-fluid and collapse div
    document.write('</div>'); // close the card
    document.write(endingHTML);



    /* -- Error Checking -- */
} catch (err) {
    document.write(err.message);
}
