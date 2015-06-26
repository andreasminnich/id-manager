document.getElementById('add-identity').addEventListener('click', function() {
  var name = document.getElementById('identity-name').value;
  var city = document.getElementById('identity-city').value;

  var newIdentity = { name: name, city: city };
  var identities = loadIdentities().concat(newIdentity);

  saveIdentities(identities);

  renderTable(identities);
});

function loadIdentities() {
  if (localStorage.identities) {
    return JSON.parse(localStorage.identities);
  }
  else {
    return [];
  }
}

// [{name: "Silent Walrus", city: "New York" }]
function saveIdentities(identities) {
  localStorage.identities = JSON.stringify(identities);
}

function renderTable(identities) {
  var html = identities.map(function(identity) {
    return "<tr><td>" + identity.name + "</td><td>" + identity.city + "</td></tr>";
  }).join("\n");

  document.getElementById('identity-list').innerHTML = html;
}

renderTable(loadIdentities());