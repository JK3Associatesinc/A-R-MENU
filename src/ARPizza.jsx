import '@google/model-viewer';

export default function ARPizza() {
  const handleClick = () => {
    const viewer = document.querySelector('#pizzaViewer');
    if (viewer?.activateAR) {
      viewer.activateAR();
    } else {
      alert("AR not supported on this device.");
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#f97316',
          color: '#fff',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          margin: '20px'
        }}
      >
        🍕 View Pizza in Your Space
      </button>

      <model-viewer
        id="pizzaViewer"
        src="/models/pizza.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        style={{ display: "none" }}
      ></model-viewer>
    </>
  );
}
