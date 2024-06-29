document.addEventListener("DOMContentLoaded", function() {
    const datetimeElement = document.getElementById("datetime");
    const startButton = document.getElementById("start-btn");
    const finishButton = document.getElementById("finish-btn");
    const currentWorkout = document.getElementById("current-workout");
    const exerciseName = document.getElementById("exercise-name");
    const exerciseImage = document.getElementById("exercise-image");
    const exerciseDescription = document.getElementById("exercise-description");
    const timerElement = document.getElementById("timer");
    const workoutSummary = document.getElementById("workout-summary");
    const summaryList = document.getElementById("summary-list");
    const musicToggle = document.getElementById("music-toggle");
    const motivationalMessage = document.getElementById("motivational-message");
    const restTimerElement = document.getElementById("rest-timer");
    const customMusicInput = document.getElementById("custom-music");

    const workoutPlan = {
        Monday: {
            title: "Chest and Triceps",
            exercises: [
                { name: "Push-ups", sets: 3, reps: "12-15", image: "https://gmb.io/wp-content/uploads/2019/01/full-push-up.gif", description: "A push-up is a common calisthenics exercise beginning from the prone position." },
                { name: "Dumbbell Bench Press", sets: 3, reps: "12-15", image: "", description: "The dumbbell bench press is a weight lifting exercise that targets the chest muscles." },
                { name: "Dumbbell Flyes", sets: 3, reps: "12-15", image: "https://i.pinimg.com/originals/0b/cb/fc/0bcbfcfb99c70ae8ec9c7223b965d5ff.gif", description: "The dumbbell fly is an isolation exercise that primarily targets the chest muscles." },
                { name: "Tricep Dips", sets: 3, reps: "12-15", image: "https://i.pinimg.com/originals/71/a5/8f/71a58fff86280c49002e0149f8cea3a4.gif", description: "Tricep dips are a bodyweight exercise that target the triceps." },
                { name: "Dumbbell Tricep Extensions", sets: 3, reps: "12-15", image: "https://i.pinimg.com/originals/b0/7e/04/b07e041f3be7b6a0164b8a117300d9c4.gif", description: "Dumbbell tricep extensions target the triceps and can be done seated or standing." },
                { name: "Close-grip Push-ups", sets: 3, reps: "12-15", image: "https://newlife.com.cy/wp-content/uploads/2019/11/02591301-Close-Grip-Push-up_Upper-Arms_360.gif", description: "Close-grip push-ups focus on the triceps and the inner chest muscles." }
            ]
        },
        Tuesday: {
            title: "Back and Biceps",
            exercises: [
                { name: "Pull-ups", sets: 3, reps: "8-12", image: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", description: "Pull-ups are a compound exercise that work the upper body, primarily targeting the back muscles." },
                { name: "Dumbbell Rows", sets: 3, reps: "12-15", image: "https://i.pinimg.com/originals/2e/1d/11/2e1d11bc46aa8a0fb1d42fa9e97bbf9e.gif", description: "Dumbbell rows target the back muscles and can be done with one arm at a time." },
                { name: "Supermans", sets: 3, reps: "12-15", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/supermant-1472154358.gif", description: "Supermans are a bodyweight exercise that strengthen the lower back." },
                { name: "Dumbbell Curls", sets: 3, reps: "12-15", image: "https://i.pinimg.com/originals/7d/3c/de/7d3cdeed84c1c19ad372d5b25beffd08.gif", description: "Dumbbell curls target the biceps and can be done with a variety of grips." },
                { name: "Hammer Curls", sets: 3, reps: "12-15", image: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif", description: "Hammer curls are a variation of bicep curls that target the brachialis muscle." },
                { name: "Concentration Curls", sets: 3, reps: "12-15", image: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif", description: "Concentration curls isolate the biceps and can be done sitting down." }
            ]
        },
        Wednesday: {
            title: "Legs and Core",
            exercises: [
                { name: "Squats", sets: 3, reps: "15-20", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/bodyweightsquat-1457041691.gif", description: "Squats are a compound exercise that target the lower body, including the quads, hamstrings, and glutes." },
                { name: "Lunges", sets: 3, reps: "12-15 per leg", image: "https://cdn.jefit.com/assets/img/exercises/gifs/136.gif", description: "Lunges are a unilateral exercise that strengthen the legs and improve balance." },
                { name: "Calf Raises", sets: 3, reps: "20", image: "https://i.pinimg.com/originals/2f/7c/ca/2f7cca8d37c65384c1d0bd84cc0a91d1.gif", description: "Calf raises target the calf muscles and can be done with bodyweight or added resistance." },
                { name: "Plank", sets: 3, reps: "60 seconds", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/plank-1457045584.gif?crop=1xw:1xh;center,top&resize=1200:*", description: "The plank is an isometric core exercise that strengthens the abdominal muscles and improves stability." },
                { name: "Russian Twists", sets: 3, reps: "20", image: "https://j.gifs.com/mwy1v0.gif", description: "Russian twists target the obliques and can be done with or without weight." },
                { name: "Leg Raises", sets: 3, reps: "15", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/legraiseeccentric-1472059308.gif?crop=1xw:0.75xh;center,top&resize=1200:*", description: "Leg raises strengthen the lower abdominal muscles and hip flexors." }
            ]
        },
        Thursday: {
            title: "Shoulders and Forearms",
            exercises: [
                { name: "Dumbbell Shoulder Press", sets: 3, reps: "12-15", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbellshoulderpress-1457041578.gif", description: "The dumbbell shoulder press targets the deltoid muscles and can be done seated or standing." },
                { name: "Dumbbell Lateral Raises", sets: 3, reps: "12-15", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/lateralraise-1456955524.gif", description: "Lateral raises isolate the deltoid muscles, particularly the lateral head." },
                { name: "Dumbbell Front Raises", sets: 3, reps: "12-15", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/frontraise-1456955633.gif?crop=1xw:1xh;center,top&resize=640:*", description: "Front raises target the front deltoids and can be performed with dumbbells or a barbell." },
                { name: "Wrist Curls", sets: 3, reps: "15-20", image: "https://i.pinimg.com/originals/15/ac/77/15ac77a4a3da197a0336e9bff38491b2.gif", description: "Wrist curls strengthen the forearm muscles, specifically the flexors." },
                { name: "Reverse Wrist Curls", sets: 3, reps: "15-20", image: "https://newlife.com.cy/wp-content/uploads/2019/11/Reverse-Barbell-Curl_Forearm_360.gif", description: "Reverse wrist curls target the forearm extensors." },
                { name: "Shrugs", sets: 3, reps: "12-15", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbellshrug-1457041579.gif", description: "Shrugs target the trapezius muscles and can be done with dumbbells or a barbell." }
            ]
        },
        Friday: {
            title: "Full Body",
            exercises: [
                { name: "Burpees", sets: 3, reps: "15", image: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/15-best-fat-burning-exercises-for-men-gif-wif-2016-burpee.gif?resize=480:*", description: "Burpees are a full-body exercise that increase cardiovascular endurance and strength." },
                { name: "Dumbbell Deadlifts", sets: 3, reps: "12-15", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbelldeadlift-1457038268.gif", description: "Dumbbell deadlifts target the lower body and back muscles." },
                { name: "Mountain Climbers", sets: 3, reps: "20", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/mountainclimber-1457040581.gif", description: "Mountain climbers are a full-body exercise that improve cardiovascular fitness and core strength." },
                { name: "Dumbbell Clean and Press", sets: 3, reps: "12", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/cleanandpress-1457038083.gif?crop=1xw:1xh;center,top&resize=640:*", description: "The dumbbell clean and press is a compound exercise that targets multiple muscle groups." },
                { name: "Jumping Jacks", sets: 3, reps: "30", image: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/15-best-fat-burning-exercises-for-men-gif-jw-2016-jumping-jack.gif?resize=480:*", description: "Jumping jacks are a full-body exercise that improve cardiovascular fitness." },
                { name: "Bicycle Crunches", sets: 3, reps: "20", image: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/bicyclecrunch-1472058212.gif", description: "Bicycle crunches target the abdominal muscles and obliques." }
            ]
        },
        Saturday: {
            title: "Active Recovery",
            exercises: [
                { name: "Walking", sets: 1, reps: "30 minutes", image: "https://i.gifer.com/VuKx.gif", description: "Walking is a low-impact exercise that promotes recovery and cardiovascular health." },
                { name: "Stretching", sets: 1, reps: "15-20 minutes", image: "https://media.tenor.com/RACT2p6H1BoAAAAd/animated-stretching.gif", description: "Stretching improves flexibility and helps prevent injuries." },
                { name: "Foam Rolling", sets: 1, reps: "15-20 minutes", image: "https://thumbs.gfycat.com/SpiffyAfraidAiredale-max-1mb.gif", description: "Foam rolling helps release muscle tightness and improve blood flow." },
                { name: "Yoga", sets: 1, reps: "20-30 minutes", image: "https://thumbs.gfycat.com/ImmaculateDapperIndianglassfish-max-1mb.gif", description: "Yoga combines physical postures, breathing exercises, and meditation to improve overall health." }
            ]
        },
        Sunday: {
            title: "Rest Day",
            exercises: []
        }
    };

    const audioElement = new Audio("path/to/sound.mp3");
    const music = new Audio("path/to/phonk.mp3");
    let currentExerciseIndex = 0;
    let workoutStarted = false;
    let timerInterval = null;
    let startTime = null;
    let dayOfWeek = new Date().toLocaleString('en-us', { weekday: 'long' });
    let currentDayPlan = workoutPlan[dayOfWeek];

    function updateDateTime() {
        const now = new Date();
        datetimeElement.textContent = now.toLocaleString();
    }

    setInterval(updateDateTime, 1000);

    startButton.addEventListener("click", function() {
        if (!workoutStarted) {
            startWorkout();
        }
    });

    finishButton.addEventListener("click", function() {
        if (workoutStarted) {
            finishExercise();
        }
    });

    musicToggle.addEventListener("click", function() {
        if (music.paused) {
            music.play();
            musicToggle.textContent = "Pause Music";
        } else {
            music.pause();
            musicToggle.textContent = "Play Music";
        }
    });

    customMusicInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            music.src = url;
        }
    });

    function startWorkout() {
        currentExerciseIndex = 0;
        workoutStarted = true;
        startTime = new Date();
        startButton.style.display = "none";
        currentWorkout.style.display = "block";
        workoutSummary.style.display = "none";
        summaryList.innerHTML = '';
        showExercise();
    }

    function finishExercise() {
        const endTime = new Date();
        const timeTaken = Math.floor((endTime - startTime) / 1000);
        const exercise = currentDayPlan.exercises[currentExerciseIndex];
        const summaryItem = document.createElement("li");
        summaryItem.textContent = `${exercise.name} - Time taken: ${formatTime(timeTaken)}`;
        summaryList.appendChild(summaryItem);

        currentExerciseIndex++;
        if (currentExerciseIndex < currentDayPlan.exercises.length) {
            startRestTimer();
        } else {
            workoutFinished();
        }
    }

    function showExercise() {
        const exercise = currentDayPlan.exercises[currentExerciseIndex];
        exerciseName.textContent = `${exercise.name} - ${exercise.sets} sets of ${exercise.reps} reps`;
        exerciseImage.src = exercise.image;
        exerciseDescription.textContent = exercise.description;
        audioElement.play();
        motivationalMessage.textContent = getMotivationalMessage();
        restTimerElement.textContent = "";
        startTimer();
    }

    function startRestTimer() {
        let restTime = 30; // 30 seconds rest time
        restTimerElement.style.display = "block";
        restTimerElement.textContent = `${restTime} seconds rest`;
        let restInterval = setInterval(() => {
            restTime--;
            restTimerElement.textContent = `${restTime} seconds rest`;
            if (restTime === 0) {
                clearInterval(restInterval);
                showExercise();
            }
        }, 1000);
    }

    function startTimer() {
        let seconds = 0;
        timerInterval = setInterval(function() {
            seconds++;
            timerElement.textContent = formatTime(seconds);
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerElement.textContent = "00:00";
        startTimer();
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function workoutFinished() {
        workoutStarted = false;
        clearInterval(timerInterval);
        currentWorkout.style.display = "none";
        startButton.style.display = "block";
        workoutSummary.style.display = "block";
        motivationalMessage.textContent = "Congratulations! You've completed today's workout.";
        restTimerElement.textContent = "";
        alert("Workout completed!");
    }

    function getMotivationalMessage() {
        const messages = [
            "You're doing great! Keep pushing forward!",
            "Believe in yourself. You can do this!",
            "Stay focused and determined. You've got this!",
            "Every rep counts. Keep up the awesome work!",
            "The pain you feel today will be the strength you feel tomorrow!"
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    // Initialize workout for the current day
    document.getElementById("workout-title").textContent = currentDayPlan.title;
});
