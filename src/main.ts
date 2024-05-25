import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

	app.enableCors({
		credentials: true,
		origin:  [
			"http://localhost",
		],
		methods: ["GET","PUT","POST","DELETE","UPDATE","OPTIONS"],
	})
	
    await app.listen(3000)
}
bootstrap();
