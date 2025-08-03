function loadInternData(internId) {
  firebase.database().ref('dashboard/' + internId).once('value').then(snapshot => {
    const data = snapshot.val();
    document.getElementById('internName').innerText = data.name;
    document.getElementById('college').innerText = data.college;
    document.getElementById('department').innerText = data.department;
    document.getElementById('email').innerText = data.email;
    document.getElementById('startDate').innerText = data.startDate;
    document.getElementById('endDate').innerText = data.endDate;
    document.getElementById('referralCode').innerText = data.referralCode;
    document.getElementById('donations').innerText = data.donations;
    document.getElementById('tasksCompleted').innerText = data.tasksCompleted;

    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = "";
    data.achievements.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `🏅 ${item}`;
      achievementsList.appendChild(li);
    });

    const rewardsList = document.getElementById('rewardsList');
    rewardsList.innerHTML = "";
    data.rewards.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `🎁 ${item}`;
      rewardsList.appendChild(li);
    });
  });
}

// Load default intern on page load
window.onload = () => loadInternData("intern1");
