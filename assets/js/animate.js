// Simple fade-in for flow nodes
document.addEventListener("DOMContentLoaded", function () {
  const nodes = document.querySelectorAll(".flow-node");
  nodes.forEach((node, i) => {
    node.style.opacity = 0;
    node.style.transition = "opacity 0.8s ease-out " + i * 0.3 + "s";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    },
    { threshold: 0.2 }
  );

  nodes.forEach((node) => observer.observe(node));
});

