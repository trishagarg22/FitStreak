const plans = {
    beginner: {
        tip: "Focus on good form first. Rest when you need to and build up slowly.",
        exercises: [
            { name: "Bodyweight Squats",img:"squats.png", sets: 3, reps: "10", rest: "60 s" },
            { name: "Wall Push-ups",img:"wallpushup.png", sets: 3, reps: "10", rest: "60 s" },
            { name: "Glute Bridges",img:"glute bridges.png", sets: 3, reps: "12", rest: "45 s" },
            { name: "Plank",img:"plank.png", sets: 3, reps: "20 s", rest: "45 s" },
            { name: "Brisk Walk",img:"", sets: 1, reps: "15 min", rest: "-" }
        ]
    },
    intermediate: {
        tip: "Increase reps gradually and keep your breathing steady.",
        exercises: [
            { name: "Push-ups",img:"pushups.png", sets: 3, reps: "12", rest: "60 s" },
            { name: "Walking Lunges",img:"walkinglunges.png", sets: 3, reps: "12 each leg", rest: "60 s" },
            { name: "Squat Jumps",img:"squatjumps.png", sets: 3, reps: "12", rest: "60 s" },
            { name: "Plank",img:"plank.png", sets: 3, reps: "40 s", rest: "45 s" },
            { name: "Mountain Climbers",img:"mountainclimbers.png", sets: 3, reps: "30 s", rest: "45 s" }
        ]
    },
    advanced: {
        tip: "Warm up well, listen to your body and never skip rest days.",
        exercises: [
            { name: "Diamond Push-ups",img:"diamondpushups.png", sets: 4, reps: "15", rest: "60 s" },
            { name: "Jump Lunges",img:"jumplunges.png", sets: 4, reps: "16 total", rest: "60 s" },
            { name: "Burpees",img:"burpees.png", sets: 4, reps: "12", rest: "60 s" },
            { name: "Plank",img:"plank.png", sets: 4, reps: "60 s", rest: "45 s" },
            { name: "Pull-ups",img:"pullups.png", sets: 4, reps: "6 to 8", rest: "90 s" }
        ]
    }
};
 
const tabs = document.querySelectorAll(".tab");
const planBody = document.getElementById("plan");
const levelTip = document.getElementById("leveltip");
const gallery = document.getElementById("gallery");

function showGallery(plan) {
    gallery.innerHTML = "";
 
    plan.exercises.forEach(function (exercise) {
        if (exercise.img === "") return;  
 
        const figure = document.createElement("figure");
 
        const image = document.createElement("img");
        image.src = "images/" + exercise.img;
        image.alt = exercise.name;
 
        image.addEventListener("error", function () {
            figure.remove();
        });
 
        const caption = document.createElement("figcaption");
        caption.textContent = exercise.name;
 
        figure.appendChild(image);
        figure.appendChild(caption);
        gallery.appendChild(figure);
    });
}
 
function showPlan(level) {
    const plan = plans[level];
 
    planBody.innerHTML = "";                    
 
    plan.exercises.forEach(function (exercise) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${exercise.name}</td>
            <td>${exercise.sets}</td>
            <td>${exercise.reps}</td>
            <td>${exercise.rest}</td>`;
        planBody.appendChild(row);
    });
    showGallery(plan);
    levelTip.textContent = "Tip: " + plan.tip;
}
 
tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
            t.classList.remove("active");
        });
        tab.classList.add("active");
        showPlan(tab.dataset.level);
    });
});
 

showPlan("beginner");
 