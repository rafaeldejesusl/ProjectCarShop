import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import MotorcycleModel from '../../../models/Motorcycle';
import MotorcycleService from '../../../services/Motorcycle';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';

describe('Motorcycle Service', () => {
	const motorcycleModel = new MotorcycleModel();
	const motorcycleService = new MotorcycleService(motorcycleModel);

	before(() => {
		sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithId);
		sinon.stub(motorcycleModel, 'read').resolves([motorcycleMockWithId]);
		sinon.stub(motorcycleModel, 'readOne')
			.onCall(0).resolves(motorcycleMockWithId)
			.onCall(1).resolves(null);
		sinon.stub(motorcycleModel, 'update')
			.onCall(0).resolves(motorcycleMockWithId)
			.onCall(1).resolves(null);
		sinon.stub(motorcycleModel, 'delete')
			.onCall(0).resolves(motorcycleMockWithId)
			.onCall(1).resolves(null);
	})

	after(() => {
		sinon.restore()
	})

	describe('Create Motorcycle', () => {
		it('Success', async () => {
			const motorcycleCreated = await motorcycleService.create(motorcycleMock);

			expect(motorcycleCreated).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('Find Motorcycles', () => {
		it('Success', async () => {
			const motorcycles = await motorcycleService.read();

			expect(motorcycles).to.be.deep.equal([motorcycleMockWithId]);
		});
	});

	describe('Find Motorcycle', () => {
		it('Success', async () => {
			const motorcycle = await motorcycleService.readOne(motorcycleMockWithId._id);

			expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.readOne(motorcycleMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
			}
		});
	});

	describe('Update Motorcycle', () => {
		it('Success', async () => {
			const motorcycleUpdated = await motorcycleService.update(motorcycleMockWithId._id, motorcycleMock);

			expect(motorcycleUpdated).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure "Not Found"', async () => {
			try {
				await motorcycleService.update(motorcycleMockWithId._id, motorcycleMock);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
			}
		});

		it('Failure "Invalid Object"', async () => {
			try {
				await motorcycleService.update(motorcycleMockWithId._id, {} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('Delete Motorcycle', () => {
		it('Success', async () => {
			const motorcycle = await motorcycleService.delete(motorcycleMockWithId._id);

			expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.delete(motorcycleMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
			}
		});
	});
});