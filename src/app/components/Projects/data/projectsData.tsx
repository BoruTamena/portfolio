import DevControle from "@/assets/images/devcontrole.png";
import DalyGames from "@/assets/images/dalyGames.jpg";
import { SiGo, SiMongodb, SiRedis, SiDocker, SiNginx, SiPrometheus, SiGrafana } from "react-icons/si";
export const ProjectsData = [
    {
        id: "goChat",
        index: 0,
        src: DevControle, // Placeholder - replace with actual image
        stack: [SiGo, SiMongodb, SiDocker],
        post: "",
        repository: "", // Add repository URL when available
        title: "Go-Chat: Real-Time Chat Application",
        descriptionEn: `Go-Chat is a scalable, real-time messaging platform supporting both private and group chat functionalities. The system was designed for low-latency communication, reliable message delivery, and maintainable backend architecture. It emphasizes user interactions such as friend requests, acceptance, and blocking, while ensuring data integrity and performance.

Tasks Done:
• Designed and implemented private and group chat functionalities.
• Built user interaction features, including friend requests, acceptance, and blocking.
• Integrated WebSockets for efficient, real-time, low-latency messaging.
• Implemented MongoDB for storing chat history and maintaining message persistence.
• Utilized SQLC for managing SQL queries in Go, ensuring optimized database operations and maintainable code.
• Applied Behavior-Driven Development (BDD) to write automated tests, ensuring feature accuracy and robustness.
• Implemented Role-Based Access Control (RBAC) to manage user permissions and secure chat operations.`,
        descriptionBr: `Go-Chat is a scalable, real-time messaging platform supporting both private and group chat functionalities. The system was designed for low-latency communication, reliable message delivery, and maintainable backend architecture. It emphasizes user interactions such as friend requests, acceptance, and blocking, while ensuring data integrity and performance.

Tasks Done:
• Designed and implemented private and group chat functionalities.
• Built user interaction features, including friend requests, acceptance, and blocking.
• Integrated WebSockets for efficient, real-time, low-latency messaging.
• Implemented MongoDB for storing chat history and maintaining message persistence.
• Utilized SQLC for managing SQL queries in Go, ensuring optimized database operations and maintainable code.
• Applied Behavior-Driven Development (BDD) to write automated tests, ensuring feature accuracy and robustness.
• Implemented Role-Based Access Control (RBAC) to manage user permissions and secure chat operations.`
    },
    {
        id: "jobBoard",
        index: 1,
        src: DalyGames, // Placeholder - replace with actual image
        stack: [SiGo, SiMongodb, SiDocker],
        post: "",
        repository: "", // Add repository URL when available
        title: "Job Board API",
        descriptionEn: `Developed a scalable job board platform enabling job posting, application management, and employee hiring. The system emphasizes security, maintainability, and scalability through modern backend design principles and a microservices architecture.

Tasks Done:
• Implemented core functionalities: job posting (CRUD), job applications, and employee hiring workflows.
• Integrated JWT-based authentication to ensure secure user access.
• Applied Casbin for Role-Based Access Control (RBAC) to manage permissions across different user roles.
• Used GORM for efficient database management and ORM-based operations.
• Documented APIs with Swagger, providing clear and comprehensive API specifications.
• Designed backend using a microservices architecture, improving scalability, modularity, and maintainability.
• Applied concurrent programming patterns in Go to optimize performance for high-traffic operations.

Outcomes:
• Delivered a secure and reliable job board platform with clearly defined user roles and permissions.
• Enabled efficient management of job postings and applications, improving operational workflow for employers and candidates.
• Built a scalable, maintainable backend that can grow with user demand and integrate additional services seamlessly.
• Provided well-documented APIs, simplifying integration with frontend applications and third-party services.`,
        descriptionBr: `Developed a scalable job board platform enabling job posting, application management, and employee hiring. The system emphasizes security, maintainability, and scalability through modern backend design principles and a microservices architecture.

Tasks Done:
• Implemented core functionalities: job posting (CRUD), job applications, and employee hiring workflows.
• Integrated JWT-based authentication to ensure secure user access.
• Applied Casbin for Role-Based Access Control (RBAC) to manage permissions across different user roles.
• Used GORM for efficient database management and ORM-based operations.
• Documented APIs with Swagger, providing clear and comprehensive API specifications.
• Designed backend using a microservices architecture, improving scalability, modularity, and maintainability.
• Applied concurrent programming patterns in Go to optimize performance for high-traffic operations.

Outcomes:
• Delivered a secure and reliable job board platform with clearly defined user roles and permissions.
• Enabled efficient management of job postings and applications, improving operational workflow for employers and candidates.
• Built a scalable, maintainable backend that can grow with user demand and integrate additional services seamlessly.
• Provided well-documented APIs, simplifying integration with frontend applications and third-party services.`
    },
    {
        id: "urlShortener",
        index: 2,
        src: DevControle, // Placeholder - replace with actual image
        stack: [SiGo, SiMongodb, SiRedis, SiDocker, SiNginx, SiPrometheus, SiGrafana],
        post: "",
        repository: "", // Add repository URL when available
        title: "URL Shortening Service",
        descriptionEn: `Built a high-performance, scalable URL shortener service using Go, MongoDB, Redis, and Prometheus. The platform provides fast URL shortening, analytics tracking, and horizontal scalability, following industry best practices for reliability, security, and maintainability.

Tasks Done:
• Implemented fast URL shortening using Base62 encoding for 7-character short codes.
• Developed support for custom short codes with validation and collision handling.
• Integrated analytics tracking for clicks, capturing referrer, user agent, and IP address.
• Implemented Redis caching with 24-hour TTL for sub-millisecond redirect performance.
• Designed backend for horizontal scalability, leveraging MongoDB sharding to handle billions of URLs.
• Optimized MongoDB connection pooling (min: 10, max: 100) for high concurrency.
• Configured Nginx load balancing across multiple backend instances.
• Implemented rate limiting at Nginx level to protect backend services.
• Built real-time monitoring dashboards using Prometheus and Grafana.
• Ensured system reliability with health checks and graceful shutdown procedures.

Outcomes:
• Achieved sub-millisecond URL redirects and highly responsive performance under load.
• Delivered scalable, maintainable infrastructure capable of handling massive URL datasets.
• Enabled real-time operational insights through monitoring and analytics dashboards.
• Ensured robust, reliable service with rate limiting, health checks, and clean resource management.
• Provided customizable and secure URL shortening for end users.

Skills & Technologies: Go · MongoDB · Redis · Prometheus · Grafana · Nginx · Base62 Encoding · Microservices · Scalability · Performance Optimization`,
        descriptionBr: `Built a high-performance, scalable URL shortener service using Go, MongoDB, Redis, and Prometheus. The platform provides fast URL shortening, analytics tracking, and horizontal scalability, following industry best practices for reliability, security, and maintainability.

Tasks Done:
• Implemented fast URL shortening using Base62 encoding for 7-character short codes.
• Developed support for custom short codes with validation and collision handling.
• Integrated analytics tracking for clicks, capturing referrer, user agent, and IP address.
• Implemented Redis caching with 24-hour TTL for sub-millisecond redirect performance.
• Designed backend for horizontal scalability, leveraging MongoDB sharding to handle billions of URLs.
• Optimized MongoDB connection pooling (min: 10, max: 100) for high concurrency.
• Configured Nginx load balancing across multiple backend instances.
• Implemented rate limiting at Nginx level to protect backend services.
• Built real-time monitoring dashboards using Prometheus and Grafana.
• Ensured system reliability with health checks and graceful shutdown procedures.

Outcomes:
• Achieved sub-millisecond URL redirects and highly responsive performance under load.
• Delivered scalable, maintainable infrastructure capable of handling massive URL datasets.
• Enabled real-time operational insights through monitoring and analytics dashboards.
• Ensured robust, reliable service with rate limiting, health checks, and clean resource management.
• Provided customizable and secure URL shortening for end users.

Skills & Technologies: Go · MongoDB · Redis · Prometheus · Grafana · Nginx · Base62 Encoding · Microservices · Scalability · Performance Optimization`
    }
]