/*********************************************************************************
 * WEB422 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 * 
 * Name: Alexander Mann | Student ID: 131-632-168 | Date: January 24, 2018
 * 
 *********************************************************************************/

// ROM ready handler
$(function() {
    //$( "#data" ).append( "<h4>jQuery working!</h4>" ); // test //
    // populate "well" (id:data) with team data
    $( "#teams-menu" ).on( "click", function() {
        event.preventDefault();
        $( "#data" ).empty();
        $( "#data" ).append( "<h3>Teams</h3>" );
        // AJAX get call - to site with JSON data
        $.get("https://web422-app.herokuapp.com/teams", function(data, status){
            $( "#data" ).append( JSON.stringify(data) );
        });
    });
    // populate "well" (id:data) with employee data
    $( "#employees-menu" ).on( "click", function() {
        event.preventDefault();
        $( "#data" ).empty();
        $( "#data" ).append( "<h3>Employees</h3>" );
        // AJAX get call - to site with JSON data
        $.get("https://web422-app.herokuapp.com/employees", function(data, status){
            $( "#data" ).append( JSON.stringify(data) );
        });
    });
    // populate "well" (id:data) with project data
    $( "#projects-menu" ).on( "click", function() {
        event.preventDefault();
        $( "#data" ).empty();
        $( "#data" ).append( "<h3>Projects</h3>" );
        // AJAX get call - to site with JSON data
        $.get("https://web422-app.herokuapp.com/projects", function(data, status){
            $( "#data" ).append( JSON.stringify(data) );
        });
    });
    // populate "well" (id:data) with position data
    $( "#positions-menu" ).on( "click", function() {
        event.preventDefault();
        $( "#data" ).empty();
        $( "#data" ).append( "<h3>Positions</h3>" );
        // AJAX get call - to site with JSON data
        $.get("https://web422-app.herokuapp.com/positions", function(data, status){
            $( "#data" ).append( JSON.stringify(data) );
        });
    });
});
