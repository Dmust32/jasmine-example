
describe('testFunc', function () {
		it('should exist and be a function', function () {
			expect(testFunc).toBeDefined();
			expect(testFunc).toEqual(jasmine.any(Function));
		})
		it('should return the first item of a passed array to the callback', function () {
			var arr = ['test', 'no'];
			var callback = jasmine.createSpy(function (str) {
				return str
			})
			var test = first(arr, callback);
			expect(callback).toHaveBeenCalledWith('test');
		})
	})
