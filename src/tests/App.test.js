import App from "../App";
import React from "react";
import { shallow } from "enzyme";

describe("some test", () => {
	it("tests something", () => {
		const result = shallow(<App />);
		expect(result).toBeTruthy();
	});
});
