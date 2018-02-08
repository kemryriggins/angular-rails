class ProposalMailer < ApplicationMailer
	def email(proposal)
		@proposal = proposal
		mailer(to: @proposal.client_email, subject: "You've recieved a new proposal")
	end
end
