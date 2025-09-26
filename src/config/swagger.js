import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Carambar API',
      description: 'Une API pour afficher des blagues Carambar',
      version: '1.0.0',
      contact: {
        name: 'Carambar API Support',
        email: 'support@carambar.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1',
        description: 'Serveur de développement local'
      },
      {
        url: 'https://carambar-backend-en2v.onrender.com/api/v1',
        description: 'Serveur de production'
      }
    ],
    components: {
      schemas: {
        Joke: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID unique de la blague',
              example: 1
            },
            joke: {
              type: 'string',
              description: 'La blague',
              example: 'Pourquoi les plongeurs plongent-ils toujours en arrière ?'
            },
            answer: {
              type: 'string',
              description: 'La réponse de la blague',
              example: 'Parce que sinon, ils tombent dans le bateau !'
            }
          }
        },
        NewJoke: {
          type: 'object',
          required: ['joke', 'answer'],
          properties: {
            joke: {
              type: 'string',
              description: 'La blague',
              example: 'Pourquoi les plongeurs plongent-ils toujours en arrière ?'
            },
            answer: {
              type: 'string',
              description: 'La réponse de la blague',
              example: 'Parce que sinon, ils tombent dans le bateau !'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Message d\'erreur'
            }
          }
        }
      }
    }
  },
  apis: ['./src/router.js'], // Corrigé le chemin vers votre fichier de routes
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };