// template para criação dos testes de cobertura da camada de service


import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'read').resolves([carMockWithId]);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockWithId)
			.onCall(1).resolves(null);
	})

	after(() => {
		sinon.restore()
	})

	describe('Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('Find Cars', () => {
		it('Success', async () => {
			const cars = await carService.read();

			expect(cars).to.be.deep.equal([carMockWithId]);
		});
	});

	describe('Find Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	it('Success', async () => {
		const carCreated = await carService.readOne(carMockWithId._id);

		expect(carCreated).to.be.deep.equal(carMockWithId);
	});

	it('Failure', async () => {
		try {
			await carService.readOne(carMockWithId._id);
		} catch (error:any) {
			expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
		}
	});
});