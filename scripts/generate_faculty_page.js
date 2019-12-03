$.ajax({
    type: "GET",
    url: "../data/Faculty_Sheet.csv",
    dataType: "text",
    success: function(data) {
        alert("worked");
    },
    error: function (request, status, error) {
        alert(request.responseText);
    }
 });


var section = document.createElement("SECTION");
section.setAttribute("class", "bg-light page-section");
section.setAttribute("id", "facultySection");
document.body.appendChild(section);


// section -> container -> list of rows -> each row is a heading or list of people -> col-m-4

// create one row of people for testing 

// Create the main container
var mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "container");

//Fill the main container with rows

// Header Row
mainContainer.appendChild(generateHeader());

// Row of Faculty 
mainContainer.appendChild(generateFacultyList());

// Finally, add it to the section 
section.appendChild(mainContainer);

function generateHeader(){
    var header = document.createElement("div");
    header.setAttribute("class", "row");

    var col = document.createElement("div");
    col.setAttribute("class", "col-lg-12 text-center");

    var subHeader = document.createElement("H2");
    subHeader.setAttribute("class", "section-heading text-uppercase");

    subHeader.appendChild(document.createTextNode("Faculty"));
    col.appendChild(subHeader);
    header.appendChild(col);
    
    return header;
}

function generateFacultyList(){
    var rowFaculty = document.createElement("div");
    rowFaculty.setAttribute("class", "row");

    var colMember = document.createElement("div");
    colMember.setAttribute("class", "col-sm-4");

    var member = document.createElement("div");
    member.setAttribute("class", "team-member");

    //image
    var image = document.createElement("IMG");
    image.setAttribute("class", "mx-auto rounded-circle");
    image.src = "img/faculty/julio_m_fernandez.jpg";
    
    //name
    var name = document.createElement("h4")
    name.appendChild(document.createTextNode("Julio M. Fernandez"));

    //postion and research interest
    var position = document.createElement("p");
    position.setAttribute("class", "text-muted") 
    position.appendChild(document.createTextNode("Professor"));
    position.appendChild(document.createElement("br"));
    
    var interest = document.createElement("em");
    interest.appendChild(document.createTextNode("Structure & Biophysics, Neurobiology"));
    position.appendChild(interest);

    //profile and lab links 

    var listOfLinks = document.createElement("ul");
    listOfLinks.setAttribute("class", "list-inline social-buttons");

    var profile = document.createElement("li");
    profile.setAttribute("class", "list-inline-item");

    var profileLink = document.createElement("a");
    profileLink.setAttribute("href", "https://biology.columbia.edu/people/fernandez");

    var profileIcon = document.createElement("i");
    profileIcon.setAttribute("class", "fa fa-user");

    profileLink.appendChild(profileIcon);
    profile.append(profileLink);

    listOfLinks.append(profile);



    var lab = document.createElement("li");
    lab.setAttribute("class", "list-inline-item");

    var labLink = document.createElement("a");
    labLink.setAttribute("href", "https://zeptowatt.com/");

    var labIcon = document.createElement("i");
    labIcon.setAttribute("class", "fas fa-microscope");

    labLink.appendChild(labIcon);
    lab.append(labLink);

    listOfLinks.append(lab);

    member.appendChild(image);
    member.appendChild(name);
    member.appendChild(position);
    member.appendChild(listOfLinks);

    colMember.appendChild(member);
    rowFaculty.appendChild(colMember);
    
    return rowFaculty;

}