document.addEventListener("DOMContentLoaded", function() {
	let activeTooltip = null;

	let tooltipTriggers = document.querySelectorAll(".has-tooltip");

	tooltipTriggers.forEach(function(trigger) {
		trigger.addEventListener("click", function(event) {
			event.preventDefault();

			let tooltipText = trigger.getAttribute("title");

			if (activeTooltip && activeTooltip.trigger === trigger) {
				activeTooltip.tooltip.classList.remove("tooltip_active");
				activeTooltip = null;
			} else {
				if (activeTooltip) {
					activeTooltip.tooltip.classList.remove("tooltip_active");
				}

				let tooltipElement = document.createElement("div");
				tooltipElement.className = "tooltip";
				tooltipElement.innerHTML = `<div>${tooltipText}</div>`;

				document.body.appendChild(tooltipElement);

				positionTooltip(trigger, tooltipElement);

				activeTooltip = {
					trigger: trigger,
					tooltip: tooltipElement
				};

				tooltipElement.classList.add("tooltip_active");
			}
		});
	});

	document.body.addEventListener("click", function(event) {
		if (activeTooltip && !event.target.classList.contains("has-tooltip")) {
			activeTooltip.tooltip.classList.remove("tooltip_active");
			activeTooltip = null;
		}
	});

	window.addEventListener("resize", function() {
		if (activeTooltip) {
			positionTooltip(activeTooltip.trigger, activeTooltip.tooltip);
		}
	});

	window.addEventListener("scroll", function() {
		if (activeTooltip) {
			positionTooltip(activeTooltip.trigger, activeTooltip.tooltip);
		}
	});

	function positionTooltip(trigger, tooltip) {
		let triggerRect = trigger.getBoundingClientRect();
		tooltip.style.left = `${triggerRect.left}px`;
		tooltip.style.top = `${triggerRect.bottom}px`;
	}
});