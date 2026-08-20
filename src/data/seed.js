const makeSubtask = (id, name, isCompleted = false) => ({
  id,
  name,
  isCompleted,
});

const seed = {
  boards: [
    {
      id: "0db2b70e-2482-4f04-9f84-cc296644ad37",
      name: "Platform Launch",
      columns: [
        {
          id: "bcb2e41d-6ed4-46e0-a0b6-fdc037ca0a61",
          name: "Backlog",
          tasks: [
            {
              id: "69c6c2de-c580-4b35-b37a-eda34b3140c1",
              name: "Define launch success metrics",
              description:
                "Agree on the adoption, activation, and retention metrics to monitor after launch.",
              status: "Backlog",
              subtasks: [
                makeSubtask(
                  "74091f85-c8a4-4a83-af75-e5250d90526b",
                  "Draft metric definitions",
                  true
                ),
                makeSubtask(
                  "f664271f-d1e1-4c41-8637-65004e58b10e",
                  "Confirm analytics owners"
                ),
              ],
            },
            {
              id: "c9e637ff-613c-4e94-9a8d-19d491cd1ce7",
              name: "Prepare support playbook",
              description:
                "Document common reviewer questions and escalation paths for the support team.",
              status: "Backlog",
              subtasks: [
                makeSubtask(
                  "f74c4ea7-041d-4b50-8484-c656081afcd8",
                  "Collect likely questions"
                ),
                makeSubtask(
                  "c7237f8e-cf40-464d-8e25-2fe555535be3",
                  "Assign escalation contacts"
                ),
              ],
            },
            {
              id: "de184cc8-f6db-49b9-98ad-28ec93a6718e",
              name: "Review accessibility checklist",
              description:
                "Run the final keyboard, contrast, focus, and screen-reader review across core flows.",
              status: "Backlog",
              subtasks: [
                makeSubtask(
                  "5fb32568-673b-46b7-8b9c-3480df6cc9c0",
                  "Test keyboard navigation"
                ),
                makeSubtask(
                  "4a51ec94-bba6-4777-9978-721734a60e7e",
                  "Verify color contrast"
                ),
              ],
            },
          ],
        },
        {
          id: "2dba319b-b313-4d9f-aead-b49b32cc17e8",
          name: "In Progress",
          tasks: [
            {
              id: "27bd7ef9-de44-42ab-8d28-fad10c1be298",
              name: "Polish onboarding flow",
              description:
                "Apply the final content and interaction updates from the design review.",
              status: "In Progress",
              subtasks: [
                makeSubtask(
                  "fa12c5c9-7525-492b-b609-3720bdb17c78",
                  "Update welcome copy",
                  true
                ),
                makeSubtask(
                  "0dcf675f-d19f-4704-8bd9-c21043b38f7a",
                  "Refine empty states"
                ),
                makeSubtask(
                  "b294f85f-bdab-4516-b7b6-7a5df66957f2",
                  "Check mobile layout"
                ),
              ],
            },
            {
              id: "e1209bb1-95fe-486b-bb4b-60ae5b99f754",
              name: "Create launch illustrations",
              description:
                "Finish the hero and empty-state illustrations for the reviewer build.",
              status: "In Progress",
              subtasks: [
                makeSubtask(
                  "28b6e52f-11cf-455e-b63d-cff43afb9d33",
                  "Export hero artwork",
                  true
                ),
                makeSubtask(
                  "696d6483-8d6e-4020-a99f-c2cd6fac1258",
                  "Export empty-state artwork"
                ),
              ],
            },
            {
              id: "878ff5e8-23f5-4688-91a5-8c652fd63f26",
              name: "Validate responsive board",
              description:
                "Check board navigation and task modals at tablet and mobile breakpoints.",
              status: "In Progress",
              subtasks: [
                makeSubtask(
                  "4733115b-73f7-46ca-b850-de062b6f64bd",
                  "Test tablet breakpoint",
                  true
                ),
                makeSubtask(
                  "07e746a5-c028-4b46-99ba-78da9a4bfb5d",
                  "Test mobile breakpoint"
                ),
              ],
            },
          ],
        },
        {
          id: "fc2eed7d-66d7-47fc-bc5e-f5f0f3686f2a",
          name: "Review",
          tasks: [
            {
              id: "3956b5e1-db5a-4238-9c17-a15be0a7d175",
              name: "Approve release notes",
              description:
                "Review the final release notes for clarity, accuracy, and consistent terminology.",
              status: "Review",
              subtasks: [
                makeSubtask(
                  "c9834f86-eaa8-40c0-a890-111da0c9d88b",
                  "Product review",
                  true
                ),
                makeSubtask(
                  "b940de39-652a-492c-8874-eaefc6987a68",
                  "Legal review"
                ),
              ],
            },
            {
              id: "d52ea2af-1738-4a25-adb2-e9400f2411f2",
              name: "QA primary task flows",
              description:
                "Verify create, edit, move, complete, and delete behavior on the seeded board.",
              status: "Review",
              subtasks: [
                makeSubtask(
                  "c93e807e-afb9-476d-8f62-45985244c67c",
                  "Create and edit a task",
                  true
                ),
                makeSubtask(
                  "6ddae725-0eb3-444b-85d6-b73a083db5c7",
                  "Move a task",
                  true
                ),
                makeSubtask(
                  "956546e4-ddff-4fd6-9709-194096edc9fb",
                  "Delete a task"
                ),
              ],
            },
          ],
        },
        {
          id: "15f00bd8-c3ad-4584-adf6-64478f350bbe",
          name: "Done",
          tasks: [
            {
              id: "f73139eb-19ec-462d-a5af-1f22f69c76d3",
              name: "Lock launch scope",
              description:
                "Confirm the features included in the reviewer build and defer follow-up ideas.",
              status: "Done",
              subtasks: [
                makeSubtask(
                  "fba3cdae-9834-459c-952a-2eced76bcf79",
                  "Confirm included features",
                  true
                ),
                makeSubtask(
                  "9dc55abe-716d-4cd8-b1ea-d7241fac4e7a",
                  "Document deferred work",
                  true
                ),
              ],
            },
            {
              id: "815b10f7-33d6-433a-95a2-0d2e5e560f62",
              name: "Finalize design tokens",
              description:
                "Sign off the shared color, typography, spacing, and elevation tokens.",
              status: "Done",
              subtasks: [
                makeSubtask(
                  "a010941d-aabe-49f8-b8fa-12f1cc68b0fe",
                  "Review light theme",
                  true
                ),
                makeSubtask(
                  "3d52968f-e1c0-40c5-8a6d-c927e01fd82d",
                  "Review dark theme",
                  true
                ),
              ],
            },
          ],
        },
      ],
    },
    {
      id: "b23d1e9c-2602-4fbe-8125-248ecb0f132a",
      name: "Design System",
      columns: [
        {
          id: "067b91ee-f6bb-4b4c-a2b9-f03c8cfbf7eb",
          name: "Planned",
          tasks: [],
        },
        {
          id: "0926237c-4317-4b74-8317-bb0205836d90",
          name: "Building",
          tasks: [],
        },
        {
          id: "63da754e-1abe-48b6-af01-9b72c768b7aa",
          name: "Published",
          tasks: [],
        },
      ],
    },
    {
      id: "0292ee4c-1fcf-47ef-b7ef-91dc9adf3a46",
      name: "Research",
      columns: [
        {
          id: "46f2dd7d-7b61-44f1-9cc7-a3f97c108efd",
          name: "Ideas",
          tasks: [],
        },
        {
          id: "31ba1726-f32b-457f-9f39-b02188124e01",
          name: "Interviewing",
          tasks: [],
        },
        {
          id: "f007a2fd-9120-4c6a-96d5-f1de9d116365",
          name: "Insights",
          tasks: [],
        },
      ],
    },
  ],
};

export default seed;
