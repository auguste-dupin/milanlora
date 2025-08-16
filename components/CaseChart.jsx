
'use client';

export default function CaseChart() {
  // Synthetic data for a simple trend line
  const data = [10, 25, 20, 40, 35, 60, 55, 75, 90, 85];
  const width = 200;
  const height = 40;
  const maxVal = Math.max(...data);

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - (d / maxVal) * (height - 5); // -5 to avoid touching the edge
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="w-full">
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        preserveAspectRatio="none"
        className="w-full h-12 text-accent"
      >
        <polyline
          points={points}
          fill="none"
          stroke="#06b6d4"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
