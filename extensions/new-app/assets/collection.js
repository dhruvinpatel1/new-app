function replaceAddToCartButtons() {
  const productForms = document.querySelectorAll('form[data-type="add-to-cart-form"]');

  productForms.forEach(function (form) {

    const productFormWrapper = form.closest('product-form');
    if (!productFormWrapper) return;

    // Now look for sibling <product-info> with data-url
    // const productInfo = productFormWrapper.previousElementSibling?.tagName === 'PRODUCT-INFO'
    //   ? productFormWrapper.previousElementSibling
    //   : productFormWrapper.parentElement.querySelector('product-info[data-url]');

      const productInfo = productFormWrapper.parentElement.querySelector('product-info[data-url]');

    const productUrl = productInfo ? productInfo.getAttribute('data-url') : null; 

    if (!productUrl) return;


    const addToCartButton = form.querySelector('button[name="add"]');
    if (!addToCartButton) return;

    const wybierzButton = document.createElement('button');
    wybierzButton.type = 'button';
    wybierzButton.className = addToCartButton.className + ' custom-wybierz-button';
    wybierzButton.textContent = 'Wybierz';
    wybierzButton.style.cursor = 'pointer';

    wybierzButton.addEventListener('click', function () {
      window.location.href = productUrl;
    });

    addToCartButton.parentNode.replaceChild(wybierzButton, addToCartButton);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Initial run
  replaceAddToCartButtons();

  // Watch for new product elements being added
  const observer = new MutationObserver(replaceAddToCartButtons);
  observer.observe(document.body, { childList: true, subtree: true });
});
