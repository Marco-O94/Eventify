# Eventify Backend

[NestJS Documentation](https://docs.nestjs.com)

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## 📦 Struttura del Progetto

```
eventify-backend/
│-- src/
│   ├── app.module.ts
│   ├── main.ts
│   │
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── auth.controller.ts
│   │   └── jwt.strategy.ts
│   │
│   ├── users/
│   │   ├── user.module.ts
│   │   ├── user.service.ts
│   │   └── user.entity.ts
│   │
│   ├── events/
│   │   ├── event.module.ts
│   │   ├── event.service.ts
│   │   ├── event.controller.ts
│   │   └── event.entity.ts
│   │
│   └── bookings/
│       ├── booking.module.ts
│       ├── booking.service.ts
│       ├── booking.controller.ts
│       └── booking.entity.ts
│
└── .env
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).
