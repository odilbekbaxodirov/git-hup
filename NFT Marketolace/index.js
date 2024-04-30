const token = `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`;

async function getalldata() {
    try {
        const response = await fetch("https://api.github.com/users", {
            headers: {
                Authorization: `token ${token}`
            }
        });
        if (response.ok) {
            const usersdata = await response.json();
            return usersdata;
        } else {
            console.log(`Userlar xatosi`, response.status);
            return null;
        }
    } catch (error) {
        console.log("error", error);
        return null;
    }
}

getalldata().then(usersdata => {
    if (usersdata) {
        console.log(`data`, usersdata);
        dataUser(usersdata); // Call the function to display data
    } else {
        console.log("error");
    }
});

function dataUser(users) {
    const dataWrap = document.getElementById("data__container");
    dataWrap.innerHTML = ""; // Clear previous content
users.splice(0,18)
    users.forEach(user => {
        const wrap = document.createElement("div");
        wrap.style.backgroundColor="#3B3B3B"
        wrap.style.borderRadius="10px"
        wrap.style.rowGap="10px"
        wrap.style.width="250px"
        wrap.style.height="250px"
        wrap.className = "card"
        const avatarImg = document.createElement("img");
        avatarImg.src = user.avatar_url;
        avatarImg.style.width="130px";
        avatarImg.style.height="130px";
        avatarImg.style.borderRadius="50%";
        avatarImg.classList.add("rasm")
        const text = document.createElement("h2");
        text.textContent = user.login;
const tt = document.createElement("p");
tt.innerHTML="Total Sales:34.53 ETH"
        wrap.appendChild(avatarImg);
        wrap.appendChild(text);
        wrap.appendChild(tt);
        dataWrap.appendChild(wrap);

    });
}

