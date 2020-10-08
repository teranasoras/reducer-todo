
export const ADD_TODOS = 'ADD_TODOS';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const TOGGLE_TODOS ='TOGGLE_TODOS';
export const initialstate = [
        {
            task: 'finish this project',
            completed: false,
            id: Date.now(),
        }
    ]

const newTask = (name) => {
    return{
        task: name,
        completed: false,
        id: Date.now()
    };
};


export const MyReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODOS':
            return[...state, newTask(action.payload)];
        case 'TOGGLE_TODOS':
            return state.map((item) => {
                return item.id === action.payload
                ? { ...item, completed: !item.completed}
                :item;
            });
            case 'COMPLETE_TODO':
                return state.filter((item) => !item.completed);
            default:
                return state;
    }
}