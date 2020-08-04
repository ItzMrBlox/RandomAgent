const Agents = ["Breach", "Brimstone", "Cypher", "Jett", "Omen", "Phoenix", "Raze", "Reyna", "Sage", "Sova", "Viper"]
var SelectedAgents = []


function Breach(){
if(document.getElementById('breach').className === 'picked'){
    document.getElementById('breach').classList.remove('picked');
    SelectedAgents[0] = ""
} else {
    document.getElementById('breach').className = 'picked'
    SelectedAgents[0] = "Breach"
}
}

function Brimstone(){
if(document.getElementById('brimstone').className === 'picked'){
    document.getElementById('brimstone').classList.remove('picked');
    SelectedAgents[1] = ""
} else {
    document.getElementById('brimstone').className = 'picked'
    SelectedAgents[1] = "Brimstone"
}
}

function Cypher(){
if(document.getElementById('cypher').className === 'picked'){
    document.getElementById('cypher').classList.remove('picked');
    SelectedAgents[2] = ""
} else {
    document.getElementById('cypher').className = 'picked'
    SelectedAgents[2] = "Cypher"
}
}

function Jett(){
if(document.getElementById('jett').className === 'picked'){
    document.getElementById('jett').classList.remove('picked');
    SelectedAgents[3] = ""
} else {
    document.getElementById('jett').className = 'picked'
    SelectedAgents[3] = "Jett"
}
}

function Omen(){
if(document.getElementById('omen').className === 'picked'){
    document.getElementById('omen').classList.remove('picked');
    SelectedAgents[4] = ""
} else {
    document.getElementById('omen').className = 'picked'
    SelectedAgents[4] = "Omen"
}
}

function Phoenix(){
if(document.getElementById('phoenix').className === 'picked'){
    document.getElementById('phoenix').classList.remove('picked');
    SelectedAgents[5] = ""
} else {
    document.getElementById('phoenix').className = 'picked'
    SelectedAgents[5] = "Phoenix"
}
}

function Raze(){
if(document.getElementById('raze').className === 'picked'){
    document.getElementById('raze').classList.remove('picked');
    SelectedAgents[6] = ""
} else {
    document.getElementById('raze').className = 'picked'
    SelectedAgents[6] = "Raze"
}
}

function Reyna(){
if(document.getElementById('reyna').className === 'picked'){
    document.getElementById('reyna').classList.remove('picked');
    SelectedAgents[7] = ""
} else {
    document.getElementById('reyna').className = 'picked'
    SelectedAgents[7] = "Reyna"
}
}

function Sage(){
if(document.getElementById('sage').className === 'picked'){
    document.getElementById('sage').classList.remove('picked');
    SelectedAgents[8] = ""
} else {
    document.getElementById('sage').className = 'picked'
    SelectedAgents[8] = "Sage"
}
}

function Sova(){
if(document.getElementById('sova').className === 'picked'){
    document.getElementById('sova').classList.remove('picked');
    SelectedAgents[9] = ""
} else {
    document.getElementById('sova').className = 'picked'
    SelectedAgents[9] = "Sova"
}
}

function Viper(){
if(document.getElementById('viper').className === 'picked'){
    document.getElementById('viper').classList.remove('picked');
    SelectedAgents[10] = ""
} else {
    document.getElementById('viper').className = 'picked'
    SelectedAgents[10] = "Viper"
}
}

function YourAgent() {
    var Random = Math.floor(Math.random() * Agents.length);
    var AgentRandom = Agents[Random]
    if(SelectedAgents.includes(AgentRandom) == true){
        document.getElementById("TheEnd").innerHTML = AgentRandom;
        document.getElementById("picture").src = `assets/agent/fullscale/${AgentRandom.toLowerCase()}.png`
        console.log(SelectedAgents)
    } else {
        AgentRandom = Agents[Random]
        return YourAgent()
    }
}

function SelectAll(){
    document.getElementById('breach').className = 'picked'
    document.getElementById('brimstone').className = 'picked'
    document.getElementById('cypher').className = 'picked'
    document.getElementById('jett').className = 'picked'
    document.getElementById('omen').className = 'picked'
    document.getElementById('phoenix').className = 'picked'
    document.getElementById('raze').className = 'picked'
    document.getElementById('reyna').className = 'picked'
    document.getElementById('sage').className = 'picked'
    document.getElementById('sova').className = 'picked'
    document.getElementById('viper').className = 'picked'
    SelectedAgents = ["Breach", "Brimstone", "Cypher", "Jett", "Omen", "Phoenix", "Raze", "Reyna", "Sage", "Sova", "Viper"]
}