/*********************************************************************************
 * WEB422 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 * 
 * Name: Alexander Mann | Student ID: 131-632-168 | Date: January 28, 2018
 * 
 *********************************************************************************/

let employeesModal = [];

function initializeEmployeesModal() {
    // fetch employee data
    $.get("https://web422-app.herokuapp.com/employees", function (data, status) {
        employeesModal = data;
        refreshEmployeeRows(employeesModal);
        if (status != "success") {
            showGenericModal('Error', 'Unable to get Employees');
        }
    });
}

function showGenericModal(title, message) {
    // populate and show modal window
    $(".modal-title").append(JSON.stringify(title));
    $(".modal-body").append(JSON.stringify(message));
    $("#genericModal").modal("show");
}

function refreshEmployeeRows(employees) {
    // create lodash template
    let employeeTemplate = _.template(
        // loop through data
        "<% _.forEach(employees, function(employee) {" +
        // get the id
        "<% <div class='row body-row' data-id='" +
        "<%- employee._id %>" +
        "'> %>" +
        // get the first name
        "<% <div class='col-xs-4 body-column'> %>" +
        "<%- employee.FirstName %>" +
        "<% </div> %>" +
        // get the last name
        "<% <div class='col-xs-4 body-column'> %>" +
        "<%- employee.LastName %>" +
        "<% </div> %>" +
        // get the position
        "<% <div class='col-xs-4 body-column'> %>" +
        "<%- employee.Position.PositionName %>" +
        "<% </div> %>" +
        "<% </div> %>" + // close div #_id
        "}); %>" // close forEach
    )
    // populate the data using the template
    $("#employees-table").event.preventDefault();
    $("#employees-table").appendChild(
        employeeTemplate({ 'employees': employees })
    );
}

function getFilteredEmployeesModel(filterString) {
    return _.filter(employeesModal, {
        'FirstName': filterString,
        'LastName': filterString,
        'Positon.PositionName': filterString
    });
}

function getEmployeeModelById(id) {
    return _.find(employeesModal, { '_id' : id });
}

// ROM ready-handler
$(function () {
    // populate data
    initializeEmployeesModal();
    // react to search-bar query
    $( "#employee-search" ).keyup(function() {
        // refresh area with filtered result
        refreshEmployeeRows( getFilteredEmployeesModel( $('#employee-search').val() ) );
    });
}); // end of DOM ready-handler
