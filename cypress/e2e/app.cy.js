class RegisterForm {
  elements = {
    titleInput: () => cy.get("#title"),
    titleFeedbeck: () => cy.get("#titleFeedbeck"),
    imageUrlInput: () => cy.get("#imageUrl"),
    urlFeedbeck: () => cy.get("#urlFeedbeck"),
    submitBtn: () => cy.get("#btnSubmit"),
  };

  typeTitle(text) {
    if (!text) return;
    this.elements.titleInput().type(text);
  }

  typeUrl(text) {
    if (!text) return;
    this.elements.imageUrlInput().type(text);
  }
  clickSubmit() {
    this.elements.submitBtn().click();
  }
}

const registerForm = new RegisterForm();

describe("Image Registration", () => {
  describe("Submitting an image with invalid inputs", () => {
    const input = {
      title: "",
      url: "",
    };

    it("passes", () => {
      cy.visit("/");
    });

    it(`When I enter "${input.title}" in the title field`, () => {
      registerForm.typeTitle(input.title);
    });

    it(`Then I enter "${input.url}" in the URL field`, () => {
      registerForm.typeUrl(input.url);
    });

    it(`Then I click the submit button`, () => {
      registerForm.clickSubmit();
    });
    it(
      `Then I should see "Please type a title for the image" message above the title field`
    );
    it(
      `And I should see "Please type a valid URL" message above the imageUrl field`
    );
    it(`And I should see an exclamation icon in the title and URL fields`);
  });
});
