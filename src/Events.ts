import { List } from "./List";
import { GameObject } from "./GameObjects";

class EventsList extends List<Event>{
    idle(object: GameObject){
        object.active++;
        if(object.active > 4){
            object.active = 0;
        }
    };

    onStart(object: GameObject){
        object.active = 0;
    }

    onCollide(){}
    
    onDestroy(){}
}

class Event {
    name ? : string;
}

export { Event, EventsList }
