import { Services } from "@/types/type"
import Image1 from "../../public/images/services/list/serviceList_1.jpg"
import Image2 from "../../public/images/services/list/serviceList_2.jpg"
import Image3 from "../../public/images/services/list/serviceList_3.jpg"
import Image4 from "../../public/images/services/list/serviceList_4.jpg"

const services = [
    {
        title: "Website Development",
        href: "/services/web-development",
        technologies: [
            "Brand websites",
            "Multi-page sites",
            "Redevelopment",
            "Responsive UI/UX",
            "CMS",
            "Accessibility",
        ],
        description: "Brand-led marketing and business websites, designed for mobile first and built on a fast, maintainable foundation. Performance, accessibility and SEO are part of the build, not add-ons.",
        image: Image2
    },
    {
        title: "E-commerce",
        href: "/services/ecommerce",
        technologies: [
            "Storefront design",
            "Collections",
            "Variants & sizing",
            "Mobile shopping",
            "Checkout",
            "Product SEO",
        ],
        description: "Online stores that present products properly and make buying easy. We plan collections, variants, sizing and checkout around how your customers shop, and confirm payment and shipping integrations during scoping.",
        image: Image1
    },
    {
        title: "SEO & Analytics",
        href: "/services/seo",
        technologies: [
            "Technical SEO",
            "Structured data",
            "Product pages",
            "Search Console",
            "Reporting",
        ],
        description: "Ongoing technical and on-page optimisation, with measurement set up so you can see what is working. We report progress honestly and prioritise improvements by likely impact. No rankings are guaranteed.",
        image: Image3
    },
    {
        title: "Dashboards & Integrations",
        href: "/services/dashboards-analytics",
        technologies: [
            "Custom dashboards",
            "API integrations",
            "Data sync",
            "Lead workflows",
            "Automation",
        ],
        description: "Custom engineering for growing businesses: dashboards that bring sales, stock and customer data together, and integrations that connect your existing tools. Each project is scoped after a feasibility assessment.",
        image: Image4
    },
]

export const allServices : Services[] = []

services.forEach((item, i) => {
    allServices.push({
        ...item,
        id: i + 1
    })
})
