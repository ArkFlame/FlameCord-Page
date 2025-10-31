// =================================================================
// --- THIS IS THE DEFINITIVE FIX FOR ALL CHART TEXT ---
// By setting this global default, every piece of text (labels, legends, tooltips)
// will now be white unless specified otherwise.
Chart.defaults.color = "#E0E0E0"; // Using your primary text color
// =================================================================


export function initCharts() {
  const cpuChartCanvas = document.getElementById('cpu-chart');
  const ramChartCanvas = document.getElementById('ram-chart');

  if (!cpuChartCanvas || !ramChartCanvas) {
    console.error("Benchmark chart canvas elements not found.");
    return;
  }

  // --- Reusable Configuration for a Dark Theme ---
  // We no longer need to specify the color in every single option.
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
            family: 'Poppins, sans-serif'
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' // Horizontal grid lines
        },
        ticks: {
          // Color is now inherited from the global default
        }
      },
      x: {
        grid: {
          display: false // No vertical grid lines
        },
        ticks: {
          // Color is now inherited from the global default
        }
      }
    }
  };

  // --- The rest of your file (creating the new charts) remains exactly the same ---
  // --- 1. CPU USAGE CHART ---
  new Chart(cpuChartCanvas, {
    type: 'bar',
    data: {
      labels: ['FlameCord', 'Velocity', 'Waterfall'],
      datasets: [{
        label: 'CPU Usage (%)',
        data: [1.18, 1.4, 2.4],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 0
      }]
    },
    options: chartOptions
  });

  // --- 2. RAM USAGE CHART ---
  new Chart(ramChartCanvas, {
    type: 'bar',
    data: {
      labels: ['FlameCord', 'Velocity', 'Waterfall'],
      datasets: [{
        label: 'RAM Usage (MB)',
        data: [170, 303, 179],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 0
      }]
    },
    options: chartOptions
  });
}