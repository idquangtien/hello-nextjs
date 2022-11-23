import { createServer, Model } from "miragejs";

const todos = [
    { id: 1, name: 'learn nextjs', completed: false, priority: 'medium' },
    { id: 2, name: 'learn react', completed: false, priority: 'high' },
    { id: 3, name: 'learn javascript', completed: false, priority: 'low' },
];
const initSavingData = {
    data: {
        customerInfo: {},
        savingInfo: {},
    }
};


export default function () {
    let server = createServer({
        models: {
            todos: Model,
            // saving: Model,
        },
        seeds(server) {
           
            server.db.loadData({
                todos: todos,
                saving: initSavingData,
            })
        },
        routes() {
            this.namespace = 'api';

            this.get('/todos', (schema) => {
                return schema.db.todos;
            });

            this.post('/addTodo', (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                schema.db.todos.insert(payload);
                return schema.db.todos;
            });

            this.put('/updateTodo', (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                const todoUpdate = schema.db.todos.find(payload.id);
                schema.db.todos.update(todoUpdate.id,payload);
                return schema.db.todos;
            })

            this.post('/deleteTodo', (schema, request) => {
                const payload = JSON.parse(request.requestBody);
                const todoDelete = schema.db.todos.find(payload.id);
                schema.db.todos.remove(todoDelete.id);
                return schema.db.todos;
            });

            this.post('/getInitSaving', (schema) => {
                console.log('there', schema);

                return schema.db.saving;
            })


            this.namespace = "";
            this.passthrough();
        },
    })
}