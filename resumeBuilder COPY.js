
var work = {
    "Jobs": [{
        "employer": "Vizzda",
        "title": "Assistant Product Manager",
        "dates": "4.5 years",
        "location": "Tempe",
        "description": "Was second in command on operations side of product."
    }, {
        "employer": "Lavine Machine Development",
        "title": "Research Intern",
        "dates": "4 months",
        "location": "Phoenix Warehouse District",
        "description": "This was my introduction to sitting."
    }]
}

var projects = {
    "projects": [{
        "title": "Content Management System Redesign",
        "dates": "Onrunning",
        "desctiption": "User end abd content management system information architecture...",
        "images": "awesomePictre.jpg"
    }, {
        "title": "Customer end product",
        "dates": "Throughout 2015",
        "description": "New product offering",
        "images": "screenshot.jpg"
    }]
}

var bio = {
    "name": "Daniel Alpers",
    "role": "Front End Developer",
    "contacts": {
        "email": "dan.alpers@gmail.com",
        "phone": "(480)980-8096",
        "location": "Scottsdale, Az"
    },
    "welcome-message": "Hello! Come see why you want to hire me!",
    "skills": ["JQuery", "HTML5", "CSS", "GIT", "Grunt", "Sketch"],
    "bioPic": "handball.jpg"
}

var education = {
    "schools": [{
        "Name": "Arizona State University",
        "Years": "2008 to 2011",
        "City": "Tempe",
        "Focus": "Urban Planning & Design"
    }, {
        "Name": "Udacity",
        "Focus": "Front End Developer Nanodegree"
    }]
}



if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
}


for (job in work.jobs);
$("#workExperience").append(HTMLworkStart);


var formattedEmployer = "#HTMLworkEmployer".replace("%data%",work.jobs[job].employer);
var formattedTitle = "#HTMLworkTitle".replace("%data%",work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$("#.work-entry:last").append(formattedEmployerTitle);

var formattedDates = "#HTMLworkDates".replace("%data%",work.jobs[job].dates);
$("#.work-entry:last").append(formattedDates);

var formattedLocation = "#HTMLworkLocation".replace("%data",work.jobs[job].location);
$("#.work-entry:last").append(formattedLocation);

var formattedDescription = "#HTMLworkDescription".replace("%data",work.jobs[job].description);
$("#.work-entry:last").append(formattedDescription);






