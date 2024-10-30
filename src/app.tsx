import { Container } from "./components/container"
import { LoremIpsum } from "./components/lorem-ipsum"
import image1 from "./image-1.jpeg"
import image2 from "./image-2.jpeg"
import image3 from "./image-3.jpeg"
import { renderRange } from "./utilities/render-range"

function App() {
  return (
    <Container className="py-6 space-y-6">
      {/* Bu yerda shunchaki ko'p matn ko'rsatamiz */}
      {renderRange(LoremIpsum, 30)}

      <div className="grid grid-cols-3 gap-6">
        <img loading="lazy" src={image1} className="object-cover" />
        <img loading="lazy" src={image2} className="object-cover" />
        <img loading="lazy" src={image3} className="object-cover" />
      </div>

      {/* Bu yerda shunchaki ko'p matn ko'rsatamiz */}
      {renderRange(LoremIpsum, 30)}
    </Container>
  )
}

export default App
