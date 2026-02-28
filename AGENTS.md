```markdown
# AGENTS.md - Guidelines for AI Coding Agents

These guidelines are designed to ensure high-quality, maintainable, and reliable AI coding agents. Adherence to these principles is mandatory for all development activities within this repository.

## 1. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each agent should have a single, well-defined purpose. Avoid creating multiple agents with similar functionalities.
*   **Code Reuse:**  Wherever possible, leverage existing components and libraries to minimize duplicated code.
*   **Abstraction:** Define abstract interfaces for agents, allowing for flexibility without impacting core functionality.

## 2. KISS (Keep It Simple, Stupid)

*   **Simplicity:** Favor straightforward, easily understandable code.  Avoid overly complex logic unless absolutely necessary.
*   **Readability:** Use descriptive variable and function names.  Follow consistent naming conventions.
*   **Minimal Dependencies:**  Keep dependencies to a minimum.  Each dependency should have a clearly defined purpose.
*   **Focused Modules:** Break down large modules into smaller, well-defined components.

## 3. SOLID Principles

*   **Single Responsibility Principle (SRP):**  All classes and functions should have one, and only one, reason to change.
*   **Open/Closed Principle:**  The agent's core logic should be open for extension but closed for modification.  New features should be implemented as new agents.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients shouldn't be forced to depend on methods they don't use.
*   **Dependency Inversion Principle:** High-level modules (agents) should not depend on low-level modules (components), but should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   **Avoid Unnecessary Features:** Implement only the necessary functionality for the current iteration.  Don't add features that aren't currently required.
*   **Future-Proofing:** Consider potential future requirements when designing agents. Avoid premature optimization.

## 5. Development Practices

*   **Unit Testing:** All agent code must be thoroughly unit tested.  Each agent should have a dedicated test suite.
*   **Test Coverage:** Aim for 80% test coverage for all agent functions and modules.  Automated testing framework utilized.
*   **Code Reviews:** All code changes must undergo rigorous code reviews.  Prioritize readability and adherence to guidelines.
*   **Documentation:**  Provide clear and concise documentation for each agent, including input, output, and potential use cases.
*   **Error Handling:** Implement robust error handling to prevent crashes and provide informative error messages.
*   **Logging:**  Use structured logging to track agent activity and identify potential issues.
*   **Versioning:** Use a consistent versioning strategy (e.g., semantic versioning) for all agent files.
*   **Configuration Management:**  Employ a configuration management system to manage agent parameters effectively.
*   **Code Formatting:**  Utilize a code formatter (e.g., Prettier) to ensure consistent code style.

## 6. File Size Limits

*   **Maximum Code Length:** Each file must not exceed 180 lines of code.
*   **File Structure:** Organize files into logical directories based on agent type or functionality.

## 7.  AI Agent Specifics

*   **Prompt-Based Generation:** All code should be generated based on a given prompt.  The prompt must clearly define the agent’s purpose and expected behavior.
*   **Parameterization:** Use parameters in the prompt to guide the AI agent’s behavior.
*   **Output Validation:** Implement validation checks to ensure the agent's output meets the specified requirements.

## 8.  Tools & Frameworks

*   [Specify any frameworks or tools being used - e.g., specific libraries, testing frameworks]

These guidelines are a living document and may be updated as needed to improve the quality of the AGENTS.md repository.  All developers are responsible for adhering to these guidelines.
```