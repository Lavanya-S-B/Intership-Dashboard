const medals = ["🥇", "🥈", "🥉", "🏅", "🎖️"];

firebase.database().ref("dashboard").once("value").then(snapshot => {
  const data = snapshot.val();
  const interns = Object.values(data);
  interns.sort((a, b) => b.donations - a.donations);

  const list = document.getElementById("leaderboardList");
  interns.forEach((intern, index) => {
    const li = document.createElement("li");
    li.style.animationDelay = `${index * 0.2}s`;
    li.innerHTML = `${medals[index] || "🔸"} <strong>${intern.name}</strong> — ₹${intern.donations} | <em>${intern.referralCode}</em>`;
    list.appendChild(li);
  });
});
