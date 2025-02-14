import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'My Tech Stack',
  description: 'A rundown of the software, tools, and languages that power my projects and fuel my passion for development.'
}

export default function Uses() {
  return (
      <SimpleLayout
          title="Software I use and the languages I love."
          intro="People often ask me about the tools I use to build software, stay productive, or even sometimes buy just to feel productive! Here’s a list of my favorite resources."
      >
        <div className="space-y-20">
          <ToolsSection title="Operating Systems">
            <ToolsSection title="Dual Boot">
              <Tool title="Ubuntu">
                Ubuntu is my go-to operating system: lightweight, fast, and perfect for everyday programming.
              </Tool>
              <Tool title="Windows">
                I don't prefer Windows for programming, but it’s handy for software that doesn’t run on Linux (like Fusion 360). Switching between them is seamless!
              </Tool>
            </ToolsSection>
            <Tool title="Debian">
              Before getting my Acer laptop, I used a Chromebook and learned Debian to program locally. It was a great learning experience!
            </Tool>
            <Tool title="Ubuntu Server">
              I repurposed an old Chromebook, flashed new firmware, and installed Ubuntu Server on it. With port forwarding set up, I now use it as a web server to host this and other projects.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Development Tools">
            <ToolsSection title="IDEs">
              <Tool title="VS Code">
                My primary code editor. It’s versatile, lightweight, and has all the extensions I need for efficient coding.
              </Tool>
              <Tool title="JetBrains">
                I’m a huge fan of JetBrains IDEs! CLion, PyCharm, WebStorm—you name it, I’ve got it, and I use them regularly.
              </Tool>
            </ToolsSection>
            <Tool title="Fusion 360">
              Fusion 360 is my go-to for design needs. Whether it’s for robotics parts or other projects, it never disappoints.
            </Tool>
            <Tool title="Ender 3 V3">
              Investing in an Ender 3 V3 3D printer was a game-changer for prototyping. Creating physical models has never been easier.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Languages">
            <Tool title="Python">
              My favorite language for quick scripting and AI/ML projects. It’s powerful, versatile, and has a vast ecosystem.
            </Tool>
            <Tool title="C++">
              Ideal for competitive programming and robotics, C++ offers the speed and control I need for performance-heavy tasks.
            </Tool>
            <Tool title="HTML & CSS">
              The backbone of my web development projects, making sure everything looks good and functions smoothly.
            </Tool>
            <Tool title="JavaScript">
              Essential for web development, especially when building interactive front-ends and responsive designs.
            </Tool>
            <Tool title="React">
              I love using React for building dynamic and efficient front-end applications. It’s perfect for creating user-friendly interfaces.
            </Tool>
            <Tool title="Tailwind CSS">
              Tailwind CSS helps me style quickly and consistently, keeping my design process simple and my code clean.
            </Tool>
            <Tool title="MySQL">
              My go-to database solution for managing structured data in web applications. It’s reliable and integrates well with my projects.
            </Tool>
            <Tool title="PHP">
              My go-to for server-side programming and backend logic.
            </Tool>
            <Tool title="Java">
              Useful for cross-platform development, and I often use it in Android app development and other projects.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
  )



}
