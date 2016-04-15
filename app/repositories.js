var personRepository=(function (){
    var items=[
        {"name":"Иванов Иван","position":"Балбес","group":"Managers","personImage":"images/Persona.Person2.png"}, 
        {"name":"Петров Петр","position":"Балбес","group":"Managers","personImage":"images/Persona.Person2.png"},];
    
    var getItems=function(){
        return items;
    }
    
    var addItem=function(person){
        items.push(person);
    }
    
    return {
        allPersons:getItems(),
        addPerson:addItem
    }
})()