import React from "react";
import DocumentTItle from "../../utilities/DocumentTitle";

const Blogs = () => {
    DocumentTItle('Blog');
	return (
		<section className="service-page">
			<div className=" bg-gradient-to-tl  from-secondary/20 via-white to-secondary/20 shadow-xl rounded-lg xl:mx-12 mx-4">
				<div className="container mx-auto">
					<div className="text-center py-20 my-10">
						<h2 className="mb-05 text-5xl font-extrabold mb-5">Blog</h2>
						<h4 className="subtitle text-xl">Home - Blog</h4>
					</div>
				</div>
			</div>
			<div className="xl:w-10/12 mx-auto my-24">
				<div className="w-10/12 lg:w-8/12 mx-auto p-6 overflow-hidden rounded-lg shadow my-20 bg-gradient-to-tl from-secondary/20 via-white to-secondary ">
					<article className="p-5 space-y-5">
						<h2 className="text-4xl my-10 font-bold text-center text-primary">
							Difference between SQL and NoSQL
						</h2>

						<p>
							SQL is the programming language used to interface with relational
							databases. (Relational databases model data as records in rows and
							tables with logical links between them). NoSQL is a class of DBMs
							that are non-relational and generally do not use SQL.
						</p>
						<p>There are five practical differences between SQL and NoSQL:</p>
						<p className="font-bold">Language</p>
						<p className="font-bold">Scalability</p>
						<p className="font-bold">Structure</p>
						<p className="font-bold">Properties</p>
						<p className="font-bold">Support and communities</p>
						<p className="font-bold"></p>
						<p className="font-bold">1. Language</p>
						<p>
							SQL has been around for over 40 years, so it is recognizable,
							documented, and widely-used. Safe and versatile, it’s particularly
							well suited for complex queries. However, SQL restricts the user
							to working within a predefined tabular schema, and more care must
							be taken to organize and understand the data before it is used.
						</p>
						<p>
							The dynamic schemata of NoSQL databases allow representation of
							alternative structures, often alongside each other, encouraging
							greater flexibility. There is less emphasis on planning, greater
							freedom when adding new attributes or fields, and the possibility
							of varied syntax across databases. As a group, however, NoSQL
							languages lack the standard interface which SQL provides, so more
							complex queries can be difficult to execute.
						</p>
						<p>
							Though there are many dialects of SQL, all share a common syntax
							and almost-identical grammar. When querying relational databases,
							fluency in one language translates to proficiency in most others.
							On the other hand, there is very little consistency between NoSQL
							languages, as they concern a diverse set of unrelated
							technologies. Many NoSQL databases have a unique data manipulation
							language constrained by particular structures and capabilities.
						</p>
						<p className="font-bold">2. Scalability</p>
						<p>
							Most SQL databases can be scaled vertically, by increasing the
							processing power of existing hardware. NoSQL databases use a
							master-slave architecture which scales better horizontally, with
							additional servers or nodes. These are useful generalizations, but
							it’s important to note:
						</p>
						<p>
							SQL databases can be scaled horizontally as well, though sharding
							or partitioning logic is often the user’s onus and not well
							supported. NoSQL technologies are diverse and while many rely on
							the master-slave architecture, options for scaling vertically also
							exist. Savings made using more efficient data structures can
							overwhelm differences in scalability; most important is to
							understand the use case and plan accordingly.
						</p>
						<p className="font-bold">3. Structure</p>
						<p></p>
						<p>
							SQL database schemata always represent relational, tabular data,
							with rules about consistency and integrity. They contain tables
							with columns (attributes) and rows (records), and keys have
							constrained logical relationships.
						</p>
						<p>
							NoSQL databases need not stick to this format, but generally fit
							into one of four broad categories:
						</p>
						<p>
							Column-oriented databases transpose row-oriented RDBMSs, allowing
							efficient storage of high-dimensional data and individual records
							with varying attributes. Key-Value stores are dictionaries which
							access diverse objects with a key unique to each. Document stores
							hold semi-structured data: objects which contain all of their own
							relevant information, and which can be completely different from
							each other. Graph databases add the concept of relationships
							(direct links between objects) to documents, allowing rapid
							traversal of greatly connected data sets.
						</p>
						<p className="font-bold">4. Properties</p>
						<p></p>
						<p>
							At a high level, SQL and NoSQL comply with separate rules for
							resolving transactions. RDBMSs must exhibit four “ACID”
							properties:
						</p>
						<p>
							Atomicity means all transactions must succeed or fail completely.
							They cannot be partially-complete, even in the case of system
							failure. Consistency means that at each step the database follows
							invariants: rules which validate and prevent corruption. Isolation
							prevents concurrent transactions from affecting each other.
							Transactions must result in the same final state as if they were
							run sequentially, even if they were run in parallel. Durability
							makes transactions final. Even system failure cannot roll-back the
							effects of a successful transaction. NoSQL technologies adhere to
							the “CAP” theorem, which says that in any distributed database,
							only two of the following properties can be guaranteed at once:
						</p>
						<p className="font-bold">Consistency:</p>
						<p>
							Every request receives the most recent result, or an error. (Note
							this is different than in ACID) Availability: Every request has a
							non-error result, regardless of how recent that result is.
							Partition tolerance: Any delays or losses between nodes will not
							interrupt the system’s operation.
						</p>
						<p className="font-bold">5. Support and communities</p>
						<p>
							SQL databases represent massive communities, stable codebases, and
							proven standards. Multitudes of examples are posted online and
							experts are available to support those new to programming
							relational data.
						</p>
						<p>
							NoSQL technologies are being adopted quickly, but communities
							remain smaller and more fractured. However, many SQL languages are
							proprietary or associated with large single-vendors, while NoSQL
							communities benefit from open systems and concerted commitment to
							onboarding users.
						</p>
						<p>
							SQL is available to most major platforms, from operating systems
							to architectures and programming languages. Compatibility varies
							more widely for NoSQL, and dependencies need to be investigated
							more carefully.
						</p>
					</article>
				</div>
				{/* end article 1 */}
				<div className="w-10/12 lg:w-8/12 mx-auto p-6 overflow-hidden rounded-lg shadow my-20 bg-gradient-to-tl from-secondary/20 via-white to-secondary">
					<article className="p-5 space-y-5">
						<h2 className="text-4xl my-10 font-bold text-center text-primary">
							What is JWT (JSON Web Token) and how does it work?
						</h2>

						<p>
							JSON Web Token (JWT) is an open standard (RFC 7519) for securely
							transmitting information between parties as JSON object.
						</p>
						<p>
							It is compact, readable and digitally signed using a private key/
							or a public key pair by the Identity Provider(IdP). So the
							integrity and authenticity of the token can be verified by other
							parties involved.
						</p>
						<p>
							The purpose of using JWT is not to hide data but to ensure the
							authenticity of the data. JWT is signed and encoded, not
							encrypted.
						</p>
						<p>
							JWT is a token based stateless authentication mechanism. Since it
							is a client-side based stateless session, server doesn't have to
							completely rely on a datastore(database) to save session
							information.
						</p>
						<p> </p>
						<p>A JSON Web Token consists of 3 parts separated by a period.</p>
						<p className="font-bold">1. Header</p>
						<p>
							JWT header consists of token type and algorithm used for signing
							and encoding. Algorithms can be HMAC, SHA256, RSA, HS256 or RS256.
						</p>

						<p className="font-bold">2. Payload</p>
						<p>
							Payload consists of the session data called as claims. Below are
							some of the the standard claims that we can use,
						</p>
						<p>
							Issuer(iss), Subject (sub), Audience (aud), Expiration time (exp),
							Issued at (iat)
						</p>
						<p className="font-bold">3. Signature</p>
						<p></p>
						<p>
							Signature is most important part of a JSON Web Token(JWT).
							Signature is calculated by encoding the header and payload using
							Base64url Encoding and concatenating them with a period separator.
							Which is then given to the cryptographic algorithm.
						</p>
						<p>
							NoSQL databases need not stick to this format, but generally fit
							into one of four broad categories:
						</p>

						<h3 className="font-bold text-primary text-center text-xl py-5">
							How it works?
						</h3>
						<p></p>
						<p>
							Basically the identity provider(IdP) generates a JWT certifying
							user identity and Resource server decodes and verifies the
							authenticity of the token using secret salt / public key.
						</p>
						<p>User sign-in using username and password or google/facebook.</p>
						<p>
							Authentication server verifies the credentials and issues a jwt
							signed using either a secret salt or a private key.
						</p>
						<p>
							User's Client uses the JWT to access protected resources by
							passing the JWT in HTTP Authorization header.
						</p>
						<p>
							Resource server then verifies the authenticity of the token using
							the secret salt/ public key.
						</p>
					</article>
				</div>
				{/* end article 2 */}
				<div className="w-10/12 lg:w-8/12 mx-auto p-6 overflow-hidden rounded-lg shadow my-20 bg-gradient-to-tl from-secondary/20 via-white to-secondary ">
					<article className="p-5 space-y-5">
						<h2 className="text-4xl my-10 font-bold text-center text-primary">
							What is the difference between javascript and NodeJS?
						</h2>

						<p>
							1. JavaScript is a client-side scripting language that is
							lightweight, cross-platform, and interpreted. Both Java and HTML
							include it. Node.js, on the other hand, is a V8-based server-side
							programming language.
						</p>

						<p>
							2. JavaScript is a simple programming language that can be used
							with any browser that has the JavaScript Engine installed.
							Node.js, on the other hand, is an interpreter or execution
							environment for the JavaScript programming language. It requires
							libraries that can be conveniently accessed from JavaScript
							programming to be more helpful.
						</p>
						<p>
							3. Any engine may run JavaScript. As a result, writing JavaScript
							is incredibly easy, and any working environment is similar to a
							complete browser. Node.js, on the other hand, only enables the V8
							engine. Written JavaScript code, on the other hand, can run in any
							context, regardless of whether the V8 engine is supported.
						</p>
						<p>
							4. A specific non-blocking operation is required to access any
							operating system. There are a few essential objects in JavaScript,
							but they are entirely OS-specific.
						</p>
						<p>
							Node.js, on the other hand, can now operate non-blocking software
							tasks out of any JavaScript programming. It contains no
							OS-specific constants. Node.js establishes a strong relationship
							with the system files, allowing companies to read and write to the
							hard drive.
						</p>
						<p>
							5. The critical benefits of JavaScript include a wide choice of
							interfaces and interactions and just the proper amount of server
							contact and direct visitor input.
						</p>

						<p>
							Node.js, on the other hand, offers node package management with
							over 500 modules and the capacity to handle many requests at the
							same time. It also offers the unique ability to enable
							microservice architecture and the Internet of Things. Even when
							comparing node js vs. react js, node js always wins.
						</p>
					</article>
				</div>
				{/* end article 3 */}
				<div className="w-10/12 lg:w-8/12 mx-auto p-6 overflow-hidden rounded-lg shadow my-20 bg-gradient-to-tl from-secondary/20 via-white to-secondary">
					<article className="p-5 space-y-5">
						<h2 className="text-4xl my-10 font-bold text-center text-primary">
							How does NodeJS handle multiple requests at the same time?
						</h2>
						<p>
							NodeJS receives multiple client requests and places them into
							EventQueue. NodeJS is built with the concept of event-driven
							architecture. NodeJS has its own EventLoop which is an infinite
							loop that receives requests and processes them. EventLoop is the
							listener for the EventQueue.
						</p>{" "}
						<p>
							If NodeJS can process the request without I/O blocking then the
							event loop would itself process the request and sends the response
							back to the client by itself. But, it is possible to process
							multiple requests parallelling using the NodeJS cluster module or
							worker_threads module.
						</p>
						<p>
							A single instance of Node.js runs in a single thread. If you have
							a multi-core system then you can utilize every core. Sometimes
							developer wants to launch a cluster of NodeJS process to take
							advantage of the multi-core system.
						</p>
						
					</article>
				</div>
				{/* end article 4 */}
			</div>
		</section>
	);
};

export default Blogs;
