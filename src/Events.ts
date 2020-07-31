import { List } from "./List";

class EventsList extends List<Event>{}


class Event {
    name ? : string;

    onStart(){}
    onCollide(){}
    onDestroy(){}
}

export { Event, EventsList }