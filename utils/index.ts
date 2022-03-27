export const customWeb3Modal = () => {
  const container = document.querySelector(".web3modal-modal-container");
  if (!container) return;
  const descriptions = container.querySelectorAll(
    ".web3modal-provider-description"
  );

  for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].innerHTML =
      '<svg viewBox="0 0 32 32" focusable="false" class="css-1sdtgly"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.9996 16L11.9996 26L10.5996 24.6L19.1996 16L10.5996 7.4L11.9996 6L21.9996 16Z" fill="currentColor"></path></svg>';
  }

  const card = container.querySelector(".web3modal-modal-card");
  const header = document.createElement("div");
  header.classList.add("web3modal-header");
  header.innerHTML =
    '<h2 class="web3modal-header-text">Connect Wallet</h2>\
                        <button type="button" class="close-btn" aria-label="Close modal">\
                            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="currentColor"></path></svg>\
                        </button>';
  card?.insertAdjacentElement("afterbegin", header);
};

export const timeDifference = (time: string) => {
  const current = new Date();
  const when = new Date(parseInt(time));
  const diffMs = current.getTime() - when.getTime();
  const diffDays = Math.floor(diffMs / 86400000);
  if(diffDays > 0) return diffDays.toString() + (when < current ? '  day ago' : ' day');
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000)
  return diffHrs.toString()  + (when < current ? '  hours ago' : ' hours');
}
