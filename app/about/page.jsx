
export default function About() {
  return (
    <div className="container py-12 md:py-24">
      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="h1 mb-4">About Milán</h1>
          <p className="lede">
            Milán is a designer and engineer focused on creating tangible, intuitive digital products and experiences. With a background in both software and hardware, he enjoys bridging the gap between physical and digital systems.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="h2">Quick Facts</h2>
          <div className="card p-6">
            <ul className="space-y-2">
              <li><strong>Location:</strong> Santo Domingo, DR</li>
              <li><strong>Current Work:</strong> Exploring generative art and embedded systems.</li>
              <li><strong>Interests:</strong> Robotics, data visualization, interactive art.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
