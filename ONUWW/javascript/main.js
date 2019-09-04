function role_to_html(role) {
	var node = document.createElement('div');
	node.classList.add('role');
	var name = document.createElement('div');

	node.style.backgroundImage = 'url(roles/assets/'+role.img+')';
	name.classList.add('card-title');
	var img = document.createElement('img');

	name.innerHTML = role.name;
	//img.src = 'roles/assets/'+role.img;
	//img.alt = role.name;

	node.appendChild(name);
	node.appendChild(img);

	node.onclick = function() {img.style.display
		if(img.style.display == 'none') img.style.display = 'block'};

	return node;
}

var grid = document.querySelector('.role-grid');
for(i = 0; i < roles.length; i++) {
	grid.appendChild(role_to_html(roles[i]));	
}

