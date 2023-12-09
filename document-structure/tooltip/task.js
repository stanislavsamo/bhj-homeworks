document.addEventListener("DOMContentLoaded", function() {
    let tooltipTriggers = document.querySelectorAll(".has-tooltip");

    tooltipTriggers.forEach(function(trigger) {
        trigger.addEventListener("click", function(event) {
            event.preventDefault();

            let tooltipText = trigger.getAttribute("title");

            let tooltipElement = document.createElement("div");
            tooltipElement.className = "tooltip";
            tooltipElement.textContent = tooltipText;

            let triggerRect = trigger.getBoundingClientRect();
            tooltipElement.style.left = triggerRect.left + "px";
            tooltipElement.style.top = triggerRect.bottom + "px";

            document.body.appendChild(tooltipElement);

            tooltipElement.classList.add("tooltip_active");

            setTimeout(function() {
                document.body.removeChild(tooltipElement);
            }, 1500);
        });
    });
});